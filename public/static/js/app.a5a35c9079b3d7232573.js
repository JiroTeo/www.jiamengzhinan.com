webpackJsonp([25],{"/wAz":function(t,e){},"0Mti":function(t,e,n){"use strict";var a=n("BO1k"),o=n.n(a),i=n("NHnr"),r=n("0Qa9"),c=n.n(r),l=function(t){return"[object Array]"===Object.prototype.toString.call(t)},s=n("mtWM"),u=n.n(s);u.a.defaults.timeout=1e4,u.a.defaults.baseURL="https://www.jiamengzhinan.com",window.Promise||(window.Promise=c.a);var h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"get",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new c.a(function(a,o){t=t.toLowerCase();var r={url:e,method:t,transformRequest:[function(t){var e="",n=function(n){l(t[n])?t[n]&&t[n].forEach(function(t){e+=encodeURIComponent(n)+"="+encodeURIComponent(t)+"&"}):e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n])+"&"};for(var a in t)n(a);return e}],paramsSerializer:function(t){var e="",n=function(n){l(t[n])?t[n]&&t[n].forEach(function(t){e+=encodeURIComponent(n)+"="+encodeURIComponent(t)+"&"}):e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n])+"&"};for(var a in t)n(a);return e&&(e=e.substring(0,e.length-1)),e}},c=localStorage.getItem("token")||"";"get"===t?(r.params=n,r.params.token=c):(r.data=n,r.data.token=c),r=function(t){return t}(r),u.a.request(r).then(function(t){if(200===t.data.code){var e=t.data.data;a(e)}else 301===t.data.code?(i.default.$message.error(t.data.msg),setTimeout(function(t){i.default.$router.push("/login")},800)):(i.default.$message.error(t.data.msg),o(new Error(t.data.msg)))}).catch(function(t){o(t)})})};e.a={get:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("get",t,e)},post:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("post",t,e)},upload:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new c.a(function(n,a){var i={headers:{"Content-Type":"multipart/form-data;boundary="+NumberUtils.uuid()},withCredentials:!0},r=new FormData;for(var c in e)if(l(e[c])){var s=!0,h=!1,p=void 0;try{for(var f,m=o()(e[c]);!(s=(f=m.next()).done);s=!0){var d=f.value;r.append(c,d)}}catch(t){h=!0,p=t}finally{try{!s&&m.return&&m.return()}finally{if(h)throw p}}}else r.append(c,e[c]);u.a.post(t,r,i).then(function(t){if(200===t.status){var e=t.data;n(e)}else a(new Error(t.statusText))}).catch(function(t){console.error("上传文件失败====",t),a(t)})})}}},"1JcB":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o=n("qPGW"),i={name:"common-header",data:function(){return{user:""}},watch:{$route:function(t,e){"/login"==e.path&&(this.user=JSON.parse(localStorage.getItem("user")))}},mounted:function(){this.user=JSON.parse(localStorage.getItem("user"))},methods:{logout:function(){var t=this;o.a.logout().then(function(e){localStorage.removeItem("token"),localStorage.removeItem("user"),t.$router.push("/login")})}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"common-header"},[n("div",{staticClass:"body wrapper"},[n("div",{staticClass:"left"},[t._v("\n            欢迎来到加盟指南网！ 全国服务热线：400-707-1816\n        ")]),t._v(" "),n("div",{staticClass:"right"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{},[t.user.username?n("router-link",{attrs:{to:"/personal"}},[n("span",{staticClass:"name"},[t._v("您好，"+t._s(t.user.username))]),t._v(" "),n("span",{on:{click:t.logout}},[t._v("退出登陆")])]):n("router-link",{attrs:{to:"/login"}},[t._v("登陆")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"phoneVersion"},[e("span",{staticClass:"iconfont icon-phone"}),this._v(" "),e("span",[this._v("手机版")]),this._v(" "),e("img",{staticClass:"QRcode",attrs:{src:n("qsEj"),alt:"手机二维码"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weChatVersion"},[e("span",{staticClass:"iconfont icon-weChat"}),this._v(" "),e("span",[this._v("微信版")]),this._v(" "),e("img",{staticClass:"QRcode",attrs:{src:n("qsEj"),alt:"微信二维码"}})])}]};var c=n("VU/8")(i,r,!1,function(t){n("rJa2")},"data-v-ee696d58",null).exports,l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"common-footer"},[a("div",{staticClass:"links "},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"left"},[a("a",{attrs:{href:""}},[t._v("关于我们")]),t._v(" "),a("a",{attrs:{href:""}},[t._v("产品服务")]),t._v(" "),a("a",{attrs:{href:""}},[t._v("产品优势")]),t._v(" "),a("a",{attrs:{href:""}},[t._v("客户合作")]),t._v(" "),a("a",{attrs:{href:""}},[t._v("联系我们")])]),t._v(" "),a("div",{staticClass:"right"},[t._v("\n            客服热线：400-707-1816\n          ")])])]),t._v(" "),a("div",{staticClass:"body wrapper"},[a("div",{staticClass:"left"},[a("div",[t._v("友情提示：创业有风险，投资需谨慎")]),t._v(" "),a("div",[t._v("Copyright © 2017 jinrongbaijia.com All Rights Reserved.京ICP备12039491号")]),t._v(" "),a("div",[t._v("法律支持：河北盈华律师事务所")])]),t._v(" "),a("div",{staticClass:"right"},[a("div",{staticClass:"item"},[a("img",{staticClass:"QRcode",attrs:{src:n("qsEj"),alt:""}}),t._v(" "),a("div",[t._v("微信公众号")])]),t._v(" "),a("div",{staticClass:"item"},[a("img",{staticClass:"QRcode",attrs:{src:n("qsEj"),alt:""}}),t._v(" "),a("div",[t._v("手机版")])])])])])}]};var s=n("VU/8")({name:"common-footer"},l,!1,function(t){n("1JcB")},"data-v-bc7e5f8a",null).exports,u=(n("/wAz"),{name:"App",data:function(){return{header_show:!0,footer_show:!0}},components:{"common-header":c,"common-footer":s},methods:{header:function(t){this.header_show=t},footer:function(t){this.footer_show=t}}}),h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.header_show?n("common-header"):t._e(),t._v(" "),n("router-view",{on:{header:t.header,footer:t.footer}}),t._v(" "),t.footer_show?n("common-footer"):t._e()],1)},staticRenderFns:[]};var p=n("VU/8")(u,h,!1,function(t){n("cn5O")},null,null).exports,f=n("/ocq");a.default.use(f.a);var m=[{path:"/",meta:{title:"加盟指南"},component:function(t){return Promise.all([n.e(0),n.e(9)]).then(function(){var e=[n("FP3a")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/list",meta:{title:"找项目"},component:function(t){return Promise.all([n.e(0),n.e(1)]).then(function(){var e=[n("wpRo")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/rankingList",meta:{title:"排行榜"},component:function(t){return Promise.all([n.e(0),n.e(13)]).then(function(){var e=[n("V4b4")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/consultDetail",meta:{title:"资讯详情"},component:function(t){return Promise.all([n.e(0),n.e(5)]).then(function(){var e=[n("cAKM")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/list",meta:{title:"加盟指南"},component:function(t){return Promise.all([n.e(0),n.e(1)]).then(function(){var e=[n("wpRo")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/detail",meta:{title:"项目详情"},component:function(t){return Promise.all([n.e(0),n.e(20)]).then(function(){var e=[n("vN4d")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/news",meta:{title:"行业资讯"},component:function(t){return Promise.all([n.e(0),n.e(3)]).then(function(){var e=[n("ono8")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/newsList",meta:{title:"行业资讯"},component:function(t){return Promise.all([n.e(0),n.e(8)]).then(function(){var e=[n("ev2I")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/personal",meta:{title:"个人中心"},component:function(t){return Promise.all([n.e(0),n.e(14)]).then(function(){var e=[n("9dvs")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/message",meta:{title:"我的消息"},component:function(t){return Promise.all([n.e(0),n.e(11)]).then(function(){var e=[n("U51Y")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/focus",meta:{title:"我的关注"},component:function(t){return Promise.all([n.e(0),n.e(17)]).then(function(){var e=[n("q/TM")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/collect",meta:{title:"我的收藏"},component:function(t){return Promise.all([n.e(0),n.e(4)]).then(function(){var e=[n("gXXo")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/leaveMessage",meta:{title:"我的留言"},component:function(t){return Promise.all([n.e(0),n.e(18)]).then(function(){var e=[n("v7BL")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/footmark",meta:{title:"我的足迹"},component:function(t){return Promise.all([n.e(0),n.e(19)]).then(function(){var e=[n("zIXu")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/discuss",meta:{title:"我的评论"},component:function(t){return Promise.all([n.e(0),n.e(21)]).then(function(){var e=[n("K19+")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/feedback",meta:{title:"意见反馈"},component:function(t){return Promise.all([n.e(0),n.e(16)]).then(function(){var e=[n("1oos")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/data",meta:{title:"资料设置"},component:function(t){return Promise.all([n.e(0),n.e(12)]).then(function(){var e=[n("cMdx")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/account",meta:{title:"账户中心"},component:function(t){return Promise.all([n.e(0),n.e(15)]).then(function(){var e=[n("L0GI")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/investorManage",meta:{title:"投资者管理"},component:function(t){return Promise.all([n.e(0),n.e(23)]).then(function(){var e=[n("KAG/")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/leaveManage",meta:{title:"留言管理"},component:function(t){return Promise.all([n.e(0),n.e(10)]).then(function(){var e=[n("b2/Y")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/evaluate",meta:{title:"智能评估"},component:function(t){return Promise.all([n.e(0),n.e(7)]).then(function(){var e=[n("hn1F")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/evaluationReport",meta:{title:"智能评估"},component:function(t){return Promise.all([n.e(0),n.e(2)]).then(function(){var e=[n("Bys8")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/login",meta:{title:"登录"},component:function(t){return Promise.all([n.e(0),n.e(6)]).then(function(){var e=[n("DFHv")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/enter",meta:{title:"企业入驻"},component:function(t){return Promise.all([n.e(0),n.e(22)]).then(function(){var e=[n("48/O")];t.apply(null,e)}.bind(this)).catch(n.oe)}}],d=new f.a({routes:m});d.beforeEach(function(t,e,n){t.meta.title&&(document.title=t.meta.title),n()}),d.afterEach(function(t,e,n){window.scrollTo(0,0)});var v=d,g=n("zL8q"),_=n.n(g),w=(n("tvR6"),n("NYxO"));a.default.use(w.a);var y=new w.a.Store({state:{count:1}});a.default.config.productionTip=!1,a.default.use(_.a);e.default=new a.default({el:"#app",router:v,store:y,components:{App:p},template:"<App/>"})},cn5O:function(t,e){},qPGW:function(t,e,n){"use strict";var a=n("Zrlr"),o=n.n(a),i=n("wxAW"),r=n.n(i),c=n("0Mti"),l=function(){function t(){o()(this,t)}return r()(t,[{key:"getImageCode",value:function(){return c.a.get("/index/login/imageCode")}},{key:"getCode",value:function(t){return c.a.get("/index/login/get_code",t)}},{key:"login",value:function(t){return c.a.get("/index/login/login",t)}},{key:"logout",value:function(){return c.a.get("/index/login/logout")}}]),t}();e.a=new l},qsEj:function(t,e,n){t.exports=n.p+"static/img/QRcode.3fd0232.jpg"},rJa2:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a5a35c9079b3d7232573.js.map