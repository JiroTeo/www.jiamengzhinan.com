webpackJsonp([18],{cMdx:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t("PxNw"),i=t("YjSi"),n=t("Zrlr"),r=t.n(n),l=t("wxAW"),c=t.n(l),o=t("0Mti"),v=new(function(){function a(){r()(this,a)}return c()(a,[{key:"getUserData",value:function(){return o.a.get("/index/user/user_center")}},{key:"getUploadImg",value:function(a){return o.a.get("/index/user/upload_image",a)}},{key:"changeData",value:function(a){return o.a.get("/index/user/change_user_data",a)}}]),a}()),u={name:"index.vue",data:function(){return{data:{},imageUrl:"",username:"",name:"",radio:"",avatar:""}},created:function(){this.getData()},methods:{getData:function(){var a=this;v.getUserData().then(function(e){a.data=e,console.log(e),a.imageUrl=e.avatar,a.username=e.username,a.name=e.name,a.radio=e.sex,console.log(a.radio)})},chooseImg:function(a){var e=a.target.files[0];console.log(e);var t=e.size;console.log(t);var s=this;if(t<=2097152){console.log("大小合适");var i=new FileReader;i.readAsDataURL(e),i.onloadend=function(){var a=i.result;v.getUploadImg({type:0,file:a}).then(function(e){s.imageUrl=a,s.avatar=e})}}else this.$message.error("上传头像图片大小不能超过 2MB!")},getKeep:function(){var a=this,e=this.avatar,t=this.username,s=this.name,i=this.radio;v.changeData({avatar:e,username:t,name:s,sex:i}).then(function(e){a.$router.push("/data")})}},components:{PersonalMenu:i.a,PersonalHeader:s.a}},d={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("PersonalHeader"),a._v(" "),t("div",{staticClass:"centerBg"},[t("div",{staticClass:"wrapper clearfix"},[t("div",{staticClass:"centerLeft"},[t("PersonalMenu",{staticClass:"fl",attrs:{currentMenu:"8"}})],1),a._v(" "),t("div",{staticClass:"centerRight"},[a._m(0),a._v(" "),t("div",{staticClass:"centerContent"},[t("div",{staticClass:"row"},[t("label",{staticClass:"title"},[a._v("当前头像")]),a._v(" "),t("div",{staticClass:"txBox"},[a.imageUrl?t("img",{staticClass:"avatar",attrs:{src:a.imageUrl}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"}),a._v(" "),t("input",{staticClass:"uploadBtn",attrs:{type:"file",name:"image",accept:"image/*"},on:{change:a.chooseImg}})]),a._v(" "),t("p",{staticClass:"clear"}),a._v(" "),t("p",{staticClass:"beizhu"},[a._v("*仅支持JPG、GIF、PNG、JPEG、BMP格式 , 文件小于2M")])]),a._v(" "),t("div",{staticClass:"row clearfix"},[t("label",{staticClass:"title"},[a._v("昵称")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.username,expression:"username"}],staticClass:"textInp",attrs:{type:"text",placeholder:"请输入您的昵称",value:"data.username"},domProps:{value:a.username},on:{input:function(e){e.target.composing||(a.username=e.target.value)}}})]),a._v(" "),t("div",{staticClass:"row clearfix"},[t("label",{staticClass:"title"},[a._v("真实姓名")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.name,expression:"name"}],staticClass:"textInp",attrs:{type:"text",placeholder:"请输入您的姓名"},domProps:{value:a.name},on:{input:function(e){e.target.composing||(a.name=e.target.value)}}})]),a._v(" "),t("div",{staticClass:"row clearfix"},[t("label",{staticClass:"title"},[a._v("性别")]),a._v(" "),t("div",{staticClass:"sex"},[[t("el-radio",{attrs:{label:"1"},model:{value:a.radio,callback:function(e){a.radio=e},expression:"radio"}},[a._v("男")]),a._v(" "),t("el-radio",{attrs:{label:"0"},model:{value:a.radio,callback:function(e){a.radio=e},expression:"radio"}},[a._v("女")])]],2)]),a._v(" "),t("div",{staticClass:"row clearfix"},[t("label",{staticClass:"title"},[a._v("账号ID")]),a._v(" "),t("p",{staticClass:"desc"},[a._v(a._s(a.data.phone))])]),a._v(" "),t("div",{staticClass:"row clearfix"},[t("label",{staticClass:"title"},[a._v("注册时间")]),a._v(" "),t("p",{staticClass:"desc"},[a._v(a._s(a.data.addtime))])]),a._v(" "),t("div",{staticClass:"keepBtn",on:{click:a.getKeep}},[a._v("保存")])])])])])],1)},staticRenderFns:[function(){var a=this.$createElement,e=this._self._c||a;return e("div",{staticClass:"centerTitle"},[e("ul",[e("li",{staticClass:"active"},[this._v("资料设置")])])])}]};var m=t("VU/8")(u,d,!1,function(a){t("ksC8")},"data-v-4fe3c694",null);e.default=m.exports},ksC8:function(a,e){}});
//# sourceMappingURL=18.fdcb46362b491f578680.js.map