webpackJsonp([15],{L0GI:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("PxNw"),i=e("YjSi"),l=e("GeXn"),r={name:"index.vue",data:function(){return{imageUrl:"",data:""}},mounted:function(){this.getData()},methods:{handleAvatarSuccess:function(t,a){this.imageUrl=URL.createObjectURL(a.raw)},beforeAvatarUpload:function(t){var a="image/jpeg"===t.type,e=t.size/1024/1024<2;return a||this.$message.error("上传头像图片只能是 JPG 格式!"),e||this.$message.error("上传头像图片大小不能超过 2MB!"),a&&e},getData:function(){var t=this;l.a.getUserInfo().then(function(a){t.data=a,t.imageUrl=a.logo})}},components:{PersonalHeader:s.a,PersonalMenu:i.a}},c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("PersonalHeader"),t._v(" "),e("div",{staticClass:"centerBg"},[e("div",{staticClass:"wrapper clearfix"},[e("div",{staticClass:"centerLeft"},[e("PersonalMenu",{staticClass:"fl",attrs:{currentMenu:"6"}})],1),t._v(" "),e("div",{staticClass:"centerRight"},[e("div",{staticClass:"centerTitle"},[e("ul",[e("router-link",{attrs:{to:"/account"}},[e("li",{staticClass:"active"},[t._v("账户中心")])]),t._v(" "),e("router-link",{attrs:{to:"/investorManage"}},[e("li",[t._v("投资者管理")])]),t._v(" "),e("router-link",{attrs:{to:"/leaveManage"}},[e("li",[t._v("留言管理")])])],1)]),t._v(" "),e("div",{staticClass:"centerContent"},[e("div",{staticClass:"row"},[e("label",{staticClass:"title"},[t._v("公司logo")]),t._v(" "),e("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.imageUrl?e("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):e("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),t._v(" "),e("p",{staticClass:"clear"}),t._v(" "),e("p",{staticClass:"beizhu"},[t._v("*仅支持JPG、GIF、PNG、JPEG、BMP格式 , 文件小于2M")])],1),t._v(" "),e("div",{staticClass:"row clearfix"},[e("label",{staticClass:"title"},[t._v("企业名称")]),t._v(" "),e("input",{staticClass:"textInp",attrs:{type:"text",placeholder:"请输入企业名称"},domProps:{value:t.data.cname}})]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"row clearfix"},[e("label",{staticClass:"title"},[t._v("品牌名")]),t._v(" "),e("input",{staticClass:"textInp",attrs:{type:"text",placeholder:"请输入品牌名"},domProps:{value:t.data.bname}})]),t._v(" "),e("div",{staticClass:"row clearfix"},[e("label",{staticClass:"title"},[t._v("注册地址")]),t._v(" "),e("input",{staticClass:"textInp",attrs:{type:"text",placeholder:"请输入注册地址"},domProps:{value:t.data.address}})]),t._v(" "),e("div",{staticClass:"row clearfix"},[e("label",{staticClass:"title"},[t._v("联系邮箱")]),t._v(" "),e("input",{staticClass:"textInp",attrs:{type:"text",placeholder:"请输入联系邮箱"},domProps:{value:t.data.email}})]),t._v(" "),e("el-button",{staticClass:"keepBtn",attrs:{type:"primary"}},[t._v("保存")])],1)])])])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row clearfix"},[a("label",{staticClass:"title"},[this._v("手机号码")]),this._v(" "),a("p",{staticClass:"desc"},[this._v("18333156487")])])}]};var n=e("VU/8")(r,c,!1,function(t){e("uAS2")},"data-v-4e51a85c",null);a.default=n.exports},uAS2:function(t,a){}});
//# sourceMappingURL=15.fa0cc06b34139c0e97b8.js.map