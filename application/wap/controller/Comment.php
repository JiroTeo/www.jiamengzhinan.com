<?php
namespace app\wap\controller;
use think\Cache;
use think\Db;
use think\Controller;
use think\Model;

class comment extends Base{

    private $ComModel;

    public function _initialize()   {
        parent::_initialize(); // TODO: Change the autogenerated stub
        $this->ComModel = model('comment');
    }

    /*发表评论*/
    /**
     *  topic_id
     *  form_uid
     *  to_uid
     *  to_type
     *  topic_type
     *  content
     *  pid
     */
    public function addComment(){
        //验证登录
        $returnCode =  config('RETURNLOG');
        $user = $this -> user;
        if(empty($user)){
            wapReturn($returnCode['ERROR'][5]);
        }
        //接收&&格式化参数
        $data['topic_id'] = $_REQUEST['topic_id'];
        $data['form_uid'] = $user['uid'];
        $data['to_uid'] = $_REQUEST['to_uid'];
        $data['to_type'] = $_REQUEST['to_type'];
        $data['topic_type'] = empty($_REQUEST['topic_type']) ? 0 : $_REQUEST['topic_type'];
        $data['content'] = $_REQUEST['content'];
        $data['pid'] = $_REQUEST['pid'];
        $data['addtime'] = time();
        $result = $this -> ComModel -> addComment($data);
        if($result){
            //添加通知消息
            $addNotice['tid'] = $_REQUEST['topic_id'];
            $addNotice['uid'] = $_REQUEST['to_uid'];
            $addNotice['form_uid'] = $user['uid'];
            $addNotice['content'] = $_REQUEST['content'];
            $addNotice['type'] = 1;
            $addNotice['status'] = 1;
            $addNotice['addtime'] = time();
            db('notice') -> insertGetId($addNotice);
            //添加通知 end
            wapReturn($returnCode['SUCCESS'][0]);
        }else{
            wapReturn($returnCode['ERROR'][2]);
        }
    }
    
    /*发布咨询*/
    public function addConsult(){
        $returnCode = config('RETURNLOG');
        //接收参数
        $token = $_REQUEST['token'];
        $user = Cache::get($token);
        //验证手机号
        if(empty($_REQUEST['phone'])){
            return wapReturn($returnCode['ERROR']['1']);
        }
//        验证验证码
        $Code = Cache::get('CODE'.$_REQUEST['phone']);
        $CacheCode = empty($Code) ? 0 : $Code ;
        if( empty($_REQUEST['code']) || $_REQUEST['code'] !== $CacheCode){
            return wapReturn($returnCode['ERROR']['1']);
        }
        //验证真实姓名
        if(empty($_REQUEST['name'])){
            return wapReturn($returnCode['ERROR']['1']);
        }
        //验证发布内容
        if(empty($_REQUEST['content'])){
            return wapReturn($returnCode['ERROR']['1']);
        }
        //验证项目id
        $item_id = empty($_REQUEST['item_id']) ? wapReturn($returnCode['ERROR'][1]) : $_REQUEST['item_id'];
        //项目所属用户
        $to_uid = db('item') -> where(['id'=>$item_id]) -> value(['wid']);

        //存储咨询消息
        $conData['addtime'] = time();   //添加咨询时间
        $conData['status'] = 0;   //添加咨询时间
        $conData['uid'] = empty($user['uid']) ?  0 : $user['uid'];   //用户id
        $conData['phone'] = $_REQUEST['phone'];   //手机号
        $conData['name'] = $_REQUEST['name'];   //姓名
        $conData['sex'] = $_REQUEST['sex'];   //性别
        $conData['content'] = $_REQUEST['content'];  //咨询、留言内容
        $conData['item_id'] = $item_id;   //项目
        $conData['to_uid'] = $to_uid;   //项目所属用户id
        $conData['type'] = empty($_REQUEST['type'])? 0 : $_REQUEST['type'];   //用户id
        $consult = db('consult');
        $res = $consult -> insertGetId($conData);
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
            \model('item') -> addCount($addCountWhere);
            \model('item') -> addApply($addCountWhere);
            //咨询人数+1end
            //定义返回数据
            $code = $returnCode['SUCCESS'][0];
        }else{
            $code = $returnCode['ERROR'][1];
        }
        wapReturn($code);
    }

    /*我的评论列表*/
    public function com_list(){
        //定义参数
        $returnCode = config('RETURNLOG');
        if(empty($_REQUEST)){
            $dataList = $returnCode['ERROR'][1];
            $dataList['data'] = array();
            wapReturn($dataList);
        }
        //验证登录
        $token = empty($_REQUEST['token']) ? false : $_REQUEST['token'] ;
        if(empty($token)){
            wapReturn($returnCode['ERROR'][1]);
        }
        $user = Cache::get($token);
        if(empty($user)){
            wapReturn($returnCode['ERROR'][5]);
        }
        //定义条件获取留言信息
        $where['form_uid'] = $user['uid'];
        $where['status'] = 1;
        $where['to_type'] = empty($_REQUEST['type']) ? 0 : $_REQUEST['type'];
        //分页
        $page = $_REQUEST['page'] - 1 ;
        $num = $page * 7;
        $limit = $num.',7';
        //分页
        $comData = $this -> ComModel -> getCommentData($where,$limit);
        if($comData){
            $dataList = $returnCode['SUCCESS'][0];
        }else{
            $dataList = $returnCode['ERROR'][4];
            $comData = array();
        }
        $dataList['data'] = $comData;
        wapReturn($dataList);
    }

    /*评论点赞*/
    public function likes(){
        $returnCode = config('RETURNLOG');
        //验证登录
        $token = empty($_REQUEST['token']) ? false : $_REQUEST['token'];
        $user = Cache::get($token);
        $uid = empty($user) ? 0 : $user['uid'];
        $id = empty($_REQUEST['id']) ? 0 : $_REQUEST['id'];
        if(empty($id)){
            wapReturn($returnCode['ERROR'][1]);
        }
        $where['id'] = $id;
        $res = $this -> ComModel -> commentLike($where);
        if($res){
            $dataList = $returnCode['SUCCESS'][0];
            //添加通知消息-判断是否登录
            if($uid != 0){
                $add['type'] = 2;
                $add['content'] = '赞了您的评论';
                $add['status'] = 1;
                $add['tid'] = $id;
                $add['form_uid'] = $uid;
                //查询出to_uid
                $conWhere['id'] = $id;
                $toUid = db('comment') -> where($conWhere) -> value('form_uid');
                $add['uid'] = $toUid;
                $add['addtime'] = time();
                $issetNotice['tid'] = $id;
                $issetNotice['type'] = 2;
                $issetNotice['uid'] = $toUid;
                $issetNotice['form_uid'] = $uid;
                $result = db('notice') -> where($issetNotice) -> find();
                if(empty($result)){
                    db('notice') -> insertGetId($add);
                }
            }
        }else{
            $dataList = $returnCode['ERROR'][0];
        }
        wapReturn($dataList);
    }




}