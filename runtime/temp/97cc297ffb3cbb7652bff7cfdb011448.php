<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:63:"G:\www\jmzn\public/../application/admin\view\item\add_text.html";i:1563188996;}*/ ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>layedit demo</title>
    <link href="http://www.zhangjin.com\/statics/admin/editor/Content/Layui-KnifeZ/css/layui.css" rel="stylesheet" />
    <script src="http://www.zhangjin.com\/statics/admin/editor/Content/Layui-KnifeZ/layui.js"></script>
    <script src="http://www.zhangjin.com\/statics/admin/editor/Content/ace/ace.js"></script>
</head>
<body>
    <div class="layui-fluid">
        <div class="layui-row">
            <form method="post">
                <div class="layui-form-item">
                    <div class="layui-input-inline" style="width: 600px">
                        <textarea id="layeditDemo" name="text"></textarea>
                    </div>
                </div>
                <input type="hidden" name="type" value="<?php echo $data['type']; ?>">
                <input type="hidden" name="id" value="<?php echo $data['id']; ?>">
                <button class="layui-btn">提交</button>
            </form>
    </div>
    </div>

    <script>
        layui.use(['layedit', 'layer', 'jquery'], function () {
            var $ = layui.jquery;
            var layedit = layui.layedit;
            layedit.set({
                //暴露layupload参数设置接口 --详细查看layupload参数说明
                uploadImage: {
                    url: "<?php echo url('admin/index/uploadImage'); ?>",
                    accept: 'image',
                    acceptMime: 'image/*',
                    exts: 'jpg|png|gif|bmp|jpeg',
                    size: '10240'
                }
                , uploadVideo: {
                    url: '/Attachment/LayUploadFile',
                    accept: 'video',
                    acceptMime: 'video/*',
                    exts: 'mp4|flv|avi|rm|rmvb',
                    size: '20480'
                }
                //右键删除图片/视频时的回调参数，post到后台删除服务器文件等操作，
                //传递参数：
                //图片： imgpath --图片路径
                //视频： filepath --视频路径 imgpath --封面路径
                , calldel: {
                    url: '/Attachment/DeleteFile'
                }
                //开发者模式 --默认为false
                , devmode: true
                //插入代码设置
                , codeConfig: {
                    hide: true,  //是否显示编码语言选择框
                    default: 'javascript' //hide为true时的默认语言格式
                }
                , tool: [
                    'html', 'code', 'strong', 'italic', 'underline', 'del', 'addhr', '|', 'fontFomatt', 'colorpicker', 'face'
                    , '|', 'left', 'center', 'right', '|', 'link', 'unlink', 'image_alt', 'video', 'anchors'
                    , '|', 'fullScreen'
                ]
                , height: '90%'
            });
            var ieditor = layedit.build('layeditDemo');
        })
    </script>
</body>
</html>