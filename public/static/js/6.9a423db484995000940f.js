webpackJsonp([6],{DFHv:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o("mvHQ"),a=o.n(s),n=o("PxNw"),i=o("qPGW"),c={name:"personal",data:function(){return{phone:"",imgcode:"",code:"",captcha:"",checked:!0,showCode:!0,outTime:60}},created:function(){this.getData()},methods:{getData:function(){var e=this;i.a.getImageCode().then(function(t){e.captcha=t})},changeCaptcha:function(){var e=this;i.a.getImageCode().then(function(t){e.captcha=t})},getCode:function(){var e=this,t=this.phone,o=this;this.validatePhone(t)&&(this.imgcode?i.a.getCode({phone:t,img_code:this.imgcode}).then(function(t){e.showCode=!1;var s=setInterval(function(){0==o.outTime&&(o.showCode=!0,o.outTime=60,clearInterval(s)),o.outTime--},1e3);e.$message({message:"验证码发送成功",type:"success"})}):this.$message.error("请输入图片验证码"))},validatePhone:function(e){return 11==e.length||(this.$message.error("手机号码格式不正确"),!1)},getLogin:function(){var e=this,t=this.checked,o=this.imgcode,s=this.code,n=this.phone;this.validatePhone(n)&&(o?s?0==t?this.$message.error("请先阅读服务协议"):i.a.login({img_code:o,code:s,phone:n}).then(function(t){localStorage.setItem("token",t.token),localStorage.setItem("user",a()(t.user)),e.$router.push({path:"/"})}):this.$message.error("请输入短信验证码"):this.$message.error("请输入图片验证码"))}},components:{PersonalHeader:n.a}},r={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"personal"},[o("PersonalHeader"),e._v(" "),o("div",{staticClass:"loginBg"},[o("div",{staticClass:"loginBox"},[o("h2",[e._v("用户登录")]),e._v(" "),o("div",{staticClass:"row"},[o("i",{staticClass:"iconfont icon-phone"}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",placeholder:"手机号码"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),e._v(" "),o("div",{staticClass:"row"},[o("i",{staticClass:"iconfont icon-yanzheng"}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.imgcode,expression:"imgcode"}],attrs:{type:"text",placeholder:"请输入图片验证码"},domProps:{value:e.imgcode},on:{input:function(t){t.target.composing||(e.imgcode=t.target.value)}}}),e._v(" "),o("img",{staticClass:"picYz",attrs:{src:e.captcha},on:{click:e.changeCaptcha}})]),e._v(" "),o("div",{staticClass:"row"},[o("i",{staticClass:"iconfont icon-message"}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{type:"text",placeholder:"请输入短信验证码"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),e._v(" "),e.showCode?o("span",{staticClass:"messageYz",on:{click:e.getCode}},[e._v("获取验证码")]):o("span",{staticClass:"messageYz"},[e._v(e._s(e.outTime)+"S后重新获取")])]),e._v(" "),o("div",{staticClass:"loginBtn",on:{click:e.getLogin}},[e._v("登 录")]),e._v(" "),o("div",{staticClass:"remarks"},[o("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}}),e._v(" "),e._m(0)],1)])])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("span",[this._v("同意加盟指南"),t("b",[this._v("《服务协议》")])])}]};var l=o("VU/8")(c,r,!1,function(e){o("LCn6")},"data-v-8740e08c",null);t.default=l.exports},LCn6:function(e,t){},mvHQ:function(e,t,o){e.exports={default:o("qkKv"),__esModule:!0}},qkKv:function(e,t,o){var s=o("FeBl"),a=s.JSON||(s.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}}});
//# sourceMappingURL=6.9a423db484995000940f.js.map