<?php
namespace app\index\controller;
use app\index\model\consult as consultModel;
use app\common\model\NoticeLog as logModel;
use app\common\model\User as userModel;
class consult extends Base{

    private $consultModel;
    private $uid;

    public function _initialize(){
        parent::_initialize();
        // 实例化y用户模型
        $this->consultModel = model('consult');
        $this -> uid = empty($_SESSION['jmzn_web']['uid']) ? 0 : $_SESSION['jmzn_web']['uid'];
    }

    /*  todo    获取留言列表           get_consult_list
     *  todo    投资者管理-留言管理    get_consult
     *  todo    跟进详情               get_consult_detail
     *  todo    修改咨询/留言 信息     change_consult_field
     *  todo    添加跟进               add_consult_log
     *  todo    删除/恢复留言          del_consult
     *  todo    我的留言               get_my_consult
     *  todo    留言-催促              com_urge
     *  todo    添加咨询/留言          add_consult
     *  todo    修改投资意向           edit_intention
     * **/

    /*  发布留言-咨询 */
    public function addConsultData(){
        //接收 && 定义参数
        $info = $this -> request -> param();
        dump($info);
    }


    /*  获取留言列表  */
    public function get_consult_list(){

        //接收参数 && 定义参数 && 获取数据
        $id = empty($_REQUEST['id']) ? wapReturn($this -> returnCode['ERROR'][1]) : $_REQUEST['id'];
        //定义分页数据
        $page = empty($_REQUEST['page']) ? 0 : $_REQUEST['page'];
        $num = empty($_REQUEST['num']) ? 10 : $_REQUEST['num'];
        $limit = ( $page * $num ) . ' , ' . $num ;

        $where['item_id'] = $id;
        $where['status'] = 1;
        $dataList['data'] = $this -> consultModel -> getConsultList($where,'addtime desc',$limit,1,'',$this -> debug);//where/order/limit/type/user/debug
        $dataList['count'] = $this -> consultModel -> where($where) -> count();
        $rinfo = $this -> returnCode['SUCCESS'][0];
        $rinfo['data'] = $dataList;
        wapReturn($rinfo);
    }

    /*投资者/留言管理*/
    public function get_consult(){
        //判断登录
        if(empty($this -> user)){
            $rinfo = $this -> returnCode['ERROR'][5];
            wapReturn($rinfo);
        }
        //分页数据
        $num = empty($_REQUEST['num']) ? 10 : $_REQUEST['num'] ;
        $page = empty($_REQUEST['page']) ? 0 : $_REQUEST['page'];
        $limit = $page * $num .','.$num;

        //判断参数 type 0为咨询（投资者管理） 1为留言（留言管理）
        $type = empty($_REQUEST['type']) ? 0 : $_REQUEST['type'];
        $where['type'] = $type;
       //查询出项目信息
        $itemWhere['wid'] = $this -> user['uid'];
        $itemId = db('item') -> where($itemWhere) -> value('id');
        if(empty($itemId)){//数据不存在 返回数据不存在
            $rinfo = $this -> returnCode['SUCCESS'][0];
            $rinfo['data'] = [];
            wapReturn($rinfo);
        }
        $where['item_id'] = $itemId;
        //接收参数
        $read = empty($_REQUEST['read']) ? 0 : $_REQUEST['read'];//状态0待跟进/未查看  1已跟进/已查看 2已签约/催促查看 3放弃跟进/已回复
        $status = empty($_REQUEST['status']) ? 0 : $_REQUEST['status'];//0已删除1有效
        if($status == 1){//查询有效留言
            $where['read'] = $read ;
        }
        //执行查询
        $dataList['data'] = $this -> consultModel -> getConsultList($where,'addtime desc',$limit,2,$this->user,$this->debug);//where,order,limit,type,user,debug
        $dataList['count'] = $this -> consultModel -> where($where) -> count();//统计条数

        //消息通知处理start
        if($type == 0){
            $noticeData['type'] = 3;
        }elseif($type == 1){
            $noticeData['type'] = 4;
        }
        $noticeData['uid'] = $this -> user['uid'];
        model('notice') -> read_notice($noticeData);
        //消息通知end

        $rinfo = $this -> returnCode['SUCCESS'][0];
        $rinfo['data'] = $dataList;
        wapReturn($rinfo);
    }

    /*跟进详情/回复*/
    public function get_consult_detail(){
        //验证登录
        if(empty($this -> user)){
            $rinfo = $this -> returnCode['ERROR'][5];
            wapReturn($rinfo);
        }
        //查询咨询/留言信息
        $id = empty($_REQUEST['id'])? 0 : $_REQUEST['id'];
        $where['id'] = $id;
        $consultData = $this -> consultModel -> getConsultDetail($where , $this -> debug);
        if(empty($consultData)){
            $rinfo = $this -> returnCode['SUCCESS'][0];
            $rinfo['data'] = [];
            wapReturn($rinfo);
        }
        //获取跟进信息
        $conWhere['cid'] = $_REQUEST['id'];
        $conWhere['type'] = $_REQUEST['type'];//0咨询1留言
        $conLog = $this -> consultModel -> getConLogDataList($conWhere,'addtime desc',false);
        $data['con_log'] = $conLog;
        $data['consult'] = $consultData;

        $rinfo = $this -> returnCode['SUCCESS'][0];
        $rinfo['data'] = $data;
        //执行 if type=1 update status = 1
        if($_REQUEST['type'] == 1){//留言 改变留言状态。已读
                $saveData['read'] = 1 ;
                $this -> consultModel -> consultEdit($where,$saveData);
            }
        wapReturn($rinfo);
    }

    /*添加跟进&&修改咨询状态*/
    public function add_consult_log(){
        //验证登录
        if(empty($this -> user)){
            $rinfo = $this -> returnCode['ERROR'][5];
            wapReturn($rinfo);
        }
        //验证参数
        $id = empty($_REQUEST['id']) ? wapReturn($this->returnCode['ERROR'][1]) : $_REQUEST['id'];
        $content = empty($_REQUEST['content']) ? false : $_REQUEST['content'];
        $type = empty($_REQUEST['type']) ? 0 : $_REQUEST['type'];

        //验证添加跟进内容还是修改跟进状态
        if(empty($content) && $type == 0){//数据为咨询 && 发布内容为null 则为修改 咨询跟进状态||投资意向
            //修改投资者管理数据
            $save['intention'] = empty($_REQUEST['int']) ? 0 : $_REQUEST['int'];
            $save['read'] = empty($_REQUEST['read']) ? 0 : $_REQUEST['read'];
            $result = db('consult') -> where(['id'=>$id]) -> update($save);
            //修改投资者管理end
            if(empty($result)){
                $rinfo = $this -> returnCode['ERROR'][0];
            }else{
                $rinfo = $this -> returnCode['SUCCESS'][0];
            }
            wapReturn($rinfo);
        }
        //END
        //格式化参数&&添加跟进（回复）
        $add['uid'] = $this -> user['uid'];//用户id
        $add['cid'] = $id;//咨询/留言id
        $add['content'] =$content;//跟进内容
        $add['status'] = 1;//有效
        $add['addtime'] = time();
        $add['type'] = $type ;
        $logId = db('con_log') -> insertGetId($add);
        if(empty($logId)){//添加失败
            $rinfo = $this -> returnCode['ERROR'][0];
        }else{//添加成功
            $rinfo = $this -> returnCode['SUCCESS'][0];
            $ConWhere['id'] = $id;
            if($type == 0){//为咨询/状态改为传递过来的参数
                $saveData['intention'] = empty($_REQUEST['int']) ? 0 : $_REQUEST['int'];
                $saveData['read'] = empty($_REQUEST['read']) ? 1 : $_REQUEST['read'];
            }else{//留言 状态改为已读
                $saveData['read'] = 1;
            }
            $this -> consultModel -> consultEdit($ConWhere,$saveData);
        }
        wapReturn($rinfo);
    }

    /*  删除留言    */
    public function cut_off_consult(){
        //验证登录 && 接收参数
        if(empty($this -> user)){
            $rinfo = $this -> returnCode['ERROR'][5];
            wapReturn($rinfo);
        }
        //执行删除操作
        $id = empty($_REQUEST['id']) ? wapReturn($this -> returnCode['ERROR'][1]) : $_REQUEST['id'];
        $status = empty($_REQUEST['status']) ? 0 : $_REQUEST['status'];
        $res = $this -> consultModel -> changeConsultFiled(['id'=>$id],['status'=>$status],$this -> debug);
        if(empty($res)){
            $rinfo = $this -> returnCode['ERROR'][0];
        }else{
            $rinfo = $this -> returnCode['SUCCESS'][0];
        }
        wapReturn($rinfo);
    }

    /*我的留言*/
    public function get_my_consult(){
        //验证登录
        if(empty($this -> user)){
            $rinfo = $this -> returnCode['ERROR'][5];
            wapReturn($rinfo);
        }
        //接收&&定义分页数据
        $num = empty($_REQUEST['num']) ? 10 : $_REQUEST['num'] ;
        $page = empty($_REQUEST['page']) ? 0 : $_REQUEST['page'];
        $limit = $page * $num .','.$num;
        //分页end
        //获取留言信息
        $where['uid'] = $this -> user['uid'];
        $where['type'] = 1;
        $where['status'] = 1;
        $dataList['data'] = $this -> consultModel -> getMyConsult($where,'addtime desc',$limit,false,$this->debug);
        $dataList['count'] = $this -> consultModel -> where($where) -> count();
        $rinfo = $rinfo = $this -> returnCode['SUCCESS'][0];
        $rinfo['data'] = $dataList;
        wapReturn($rinfo);
    }

    /*留言-催促*/
    public function com_urge(){
        //验证登录
        if(empty($this -> user)){
            $rinfo = $this -> returnCode['ERROR'][5];
            wapReturn($rinfo);
        }
        //验证id
        $id = empty($_REQUEST['id']) ? wapReturn($this -> returnCode['ERROR'][1]) : $_REQUEST['id'];
        //改变催促状态
        $where['id'] = $id;
        $save['read'] = 3;
        $result = $this -> consultModel -> edit_consult_data($where,$save);
        if(empty($result)){
            $rinfo = $this -> returnCode['ERROR'][0];
        //添加消息通知
        }else{
            $rinfo = $this -> returnCode['SUCCESS'][0];
        }
        wapReturn($rinfo);
    }

    /*  添加留言/咨询 */
    public function add_consult(){
        //验证start   验证手机号
        $mobile = empty($_REQUEST['phone']) ? 0 : $_REQUEST['phone'];
        $resultMobile = verifMobile($mobile);
        if(empty($resultMobile)){
            $rinfo = $this -> returnCode['ERROR'][1];
            $rinfo['msg'] = '手机号错误';
            return $rinfo;
        }
        //验证手机验证码
        $code = empty($_REQUEST['code']) ? 0 : $_REQUEST['code'];
        $key = 'CODE'.$mobile;
        $resultCode = verifCode($code,$key);
        if(empty($resultCode)){
            $rinfo = $this -> returnCode['ERROR'][1];
            $rinfo['msg'] = '手机验证码错误';
            return $rinfo;
        }
        //验证姓名
        $name = empty($_REQUEST['name']) ? false : $_REQUEST['name'];
        if(empty($name)){
            $rinfo = $this -> returnCode['ERROR'][1];
            $rinfo['msg'] = '请输入真实姓名';
            return $rinfo;
        }
        //验证发布内容
        $content = empty($_REQUEST['content']) ? false : $_REQUEST['content'];
        if(empty($content)){
            $rinfo = $this -> returnCode['ERROR'][1];
            $rinfo['msg'] = '请输入留言内容';
            return $rinfo;
        }
        $item_id = empty($_REQUEST['item_id']) ? 0 : $_REQUEST['item_id'];
        if(empty($item_id)){
            $rinfo = $this -> returnCode['ERROR'][1];
            return $rinfo;
        }
        //验证 end    数据存库
        $conData['addtime'] = time();                                              //添加咨询时间
        $conData['read'] = 0;                                                    //状态谁之为未读/待跟进
        $conData['uid'] = empty($this->uid) ?  0 : $this->uid;     //用户id
        $conData['phone'] = $mobile ;                                              //手机号
        $conData['name'] = $name;                                                  //姓名
        $conData['sex'] = empty($_REQUEST['sex']) ? 0 : $_REQUEST['sex'] ;         //性别
        $conData['content'] = $content;                                            //咨询、留言内容
        $conData['item_id'] = $item_id;                                            //项目
        $conData['type'] = empty($_REQUEST['type'])? 0 : $_REQUEST['type'];        //类型0为咨询1为留言。
        $res = $this -> consultModel -> addConsult($conData,false);       //执行添加操作
        if(!empty($res)){
            //发送通知  status
            $noticeModel = \model('notice');
            //验证时留言还是咨询
            if($conData['type'] == 0){
                $noticeData['type'] = 3;//咨询
            }else{
                $noticeData['type'] = 4;//留言
            }
            $noticeData['tid'] = $_REQUEST['item_id'];
            $noticeData['form_uid'] = empty($user['uid']) ? 0 : $user['uid'];
            $noticeModel -> add_notice($noticeData);
            //发送通知end
            //项目咨询人数+1
            $addCountWhere['id'] = $_REQUEST['item_id'];
            \model('item') -> addCount($addCountWhere);//咨询数量
            \model('item') -> addApply($addCountWhere);//申请加盟人数
            //咨询人数+1end
            //定义返回数据
            $rinfo = $this -> returnCode['SUCCESS'][0];
        }else{
            $rinfo = $this -> returnCode['ERROR'][0];
        }
        return $rinfo;
    }

    /*  接收推送消息  */
    public function get_push_consult(){
        //验证登录
        $user = $this -> user;
        if(empty($user)){
            wapReturn($this -> returnCode['ERROR'][5]);
        }
        //分页数据
        $page = empty($_REQUEST['page']) ? 0 : $_REQUEST['page'] - 1 ;
        $num = empty($_REQUEST['num']) ? 10 : $_REQUEST['num'];
        $limit = ( $page * $num ) . ' , ' . $num;

        //获取推送内容
        $where['to_uid'] = $user['uid'];
        $where['type'] = 2;
        $where['status'] = 1;
        $data = $this -> consultModel ->  getConsultList($where,'addtime desc',$limit,3,$this -> debug);
        $count = db('consult') -> where($where) -> count();
        $dataList['data'] = $data;
        $dataList['count'] = $count;
        $rinfo = $this -> returnCode['SUCCESS'][0];
        $rinfo['data'] = $dataList;
        wapReturn($rinfo);
    }

    /*  阅读过推送消息 ，推送消息状态变成 投资者管理*/
    public function readNotify(){

        //验证登录
        if(empty($_SESSION['jmzn_web'])){
            return $this -> returnCode['ERROR'][0];
        }
        //接收参数 &&验证参数&&修改状态
        $id = $this -> request -> param('id');
        if(empty($id)){
            return $this -> returnCode['ERROR'][1];
        }
        //验证是否还有剩余查看条数
        $userModel = new userModel();
        $res = $userModel -> parseModel(['uid'=>$_SESSION['jmzn_web']['uid']]);
        if(empty($res)){
            //条数不足
            $rinfo = $this -> returnCode['ERROR'][6];
            return $rinfo;
        }
        //验证end
        //修改数据状态
        $where['id'] = $id;
        $save['type'] = 0;
        $consultModel = new consultModel();
        $result = $consultModel -> edit_consult_data($where,$save);
        //update notice_log.readtime
        $logModel = new logModel();
        $logWhere['tid'] = $id;
        $logWhere['uid'] = $_SESSION['jmzn_web']['uid'];
        $logWhere['type'] = 1;
        $logSave['readtime'] = time();
        $result = $logModel -> editNoticeLogField($logWhere,$logSave);
        //update end
        if(empty($result)){
            $rinfo = $this -> returnCode['ERROR'][0];
        }else{
            $rinfo = $this -> returnCode['SUCCESS'][0];
        }
        return $rinfo;
    }

}