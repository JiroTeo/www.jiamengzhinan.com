webpackJsonp([12],{aq9e:function(e,t){},cMdx:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("PxNw"),i=a("YjSi"),l=a("Zrlr"),n=a.n(l),r=a("wxAW"),c=a.n(r),o=a("0Mti"),v=new(function(){function e(){n()(this,e)}return c()(e,[{key:"getUserData",value:function(){return o.a.get("/index/user/user_center")}}]),e}()),u={name:"index.vue",data:function(){return{data:{},imageUrl:"",username:"",name:"",sex:""}},created:function(){this.getData()},methods:{getData:function(){var e=this;v.getUserData().then(function(t){e.data=t,e.imageUrl=t.avatar,e.username=t.username,e.name=t.name,e.sex=t.sex})},getKeep:function(){var e=this.imageUrl;this.username,this.name,this.sex;console.log(e),this.$router.push("/data")},chooseImg:function(){}},components:{PersonalMenu:i.a,PersonalHeader:s.a}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("PersonalHeader"),e._v(" "),a("div",{staticClass:"centerBg"},[a("div",{staticClass:"wrapper clearfix"},[a("div",{staticClass:"centerLeft"},[a("PersonalMenu",{staticClass:"fl",attrs:{currentMenu:"8"}})],1),e._v(" "),a("div",{staticClass:"centerRight"},[e._m(0),e._v(" "),a("div",{staticClass:"centerContent"},[a("div",{staticClass:"row"},[a("label",{staticClass:"title"},[e._v("当前头像")]),e._v(" "),a("div",{staticClass:"txBox",on:{click:e.chooseImg}},[e.imageUrl?a("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),e._v(" "),a("p",{staticClass:"clear"}),e._v(" "),a("p",{staticClass:"beizhu"},[e._v("*仅支持JPG、GIF、PNG、JPEG、BMP格式 , 文件小于2M")])]),e._v(" "),a("div",{staticClass:"row clearfix"},[a("label",{staticClass:"title"},[e._v("昵称")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"textInp",attrs:{type:"text",placeholder:"请输入您的昵称",value:"data.username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"row clearfix"},[a("label",{staticClass:"title"},[e._v("真实姓名")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"textInp",attrs:{type:"text",placeholder:"请输入您的姓名"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"row clearfix"},[a("label",{staticClass:"title"},[e._v("性别")]),e._v(" "),a("div",{staticClass:"sex"},[[a("el-radio",{attrs:{label:"1"},model:{value:e.sex,callback:function(t){e.sex=t},expression:"sex"}},[e._v("男")]),e._v(" "),a("el-radio",{attrs:{label:"0"},model:{value:e.sex,callback:function(t){e.sex=t},expression:"sex"}},[e._v("女")])]],2)]),e._v(" "),a("div",{staticClass:"row clearfix"},[a("label",{staticClass:"title"},[e._v("账号ID")]),e._v(" "),a("p",{staticClass:"desc"},[e._v(e._s(e.data.phone))])]),e._v(" "),a("div",{staticClass:"row clearfix"},[a("label",{staticClass:"title"},[e._v("注册时间")]),e._v(" "),a("p",{staticClass:"desc"},[e._v(e._s(e.data.addtime))])]),e._v(" "),a("div",{staticClass:"keepBtn",on:{click:e.getKeep}},[e._v("保存")])])])])])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"centerTitle"},[t("ul",[t("li",{staticClass:"active"},[this._v("资料设置")])])])}]};var m=a("VU/8")(u,d,!1,function(e){a("aq9e")},"data-v-aab47112",null);t.default=m.exports}});
//# sourceMappingURL=12.1f7e59878552fb7ecb0f.js.map