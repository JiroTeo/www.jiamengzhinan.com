webpackJsonp([12],{QU4Q:function(t,a){},U51Y:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("PxNw"),n=e("YjSi"),i=e("GeXn"),c={name:"message",data:function(){return{centerDialogVisible:!1,type:"1",page:0,count:0,data:[],currentContent:{}}},created:function(){this.getData()},methods:{getData:function(){var t=this,a=this.page,e=this.type;"1"==e?i.a.getMessageList({page:a}).then(function(a){t.data=a.data,console.log("=====",a.data),t.count=a.count}):"2"==e&&i.a.getConsultList({page:a}).then(function(a){t.data=a.data,console.log("=====",a.data),t.count=a.count})},tabChange:function(t){var a=t.target.dataset.type;this.page=0,this.type=a,this.data=[],this.getData()},detail:function(t){var a=this,e=t.currentTarget.dataset.id;i.a.getDetail({id:e}).then(function(t){a.$router.push("/investorManage")})},PhonePwd:function(t){console.log("pwd",t);var a=t.replace("JMZN",""),e="";for(var s in console.log("data",a),a)e+="HEBIDAGJMZN".indexOf(a.charAt(s));return e=e.substr(0,3)+"*****"+e.substr(-3)}},components:{PersonalHeader:s.a,PersonalMenu:n.a}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"message"},[e("PersonalHeader"),t._v(" "),e("div",{staticClass:"wrapper clearfix content"},[e("PersonalMenu",{staticClass:"fl",attrs:{currentMenu:"1"}}),t._v(" "),e("div",{staticClass:"fr right"},[e("div",{staticClass:"header",on:{click:t.tabChange}},[e("div",{staticClass:"tab fl",class:[2==t.type?"currentTab":""],attrs:{"data-type":"2"}},[t._v("评论和赞")]),t._v(" "),e("div",{staticClass:"tab fl ",class:[1==t.type?"currentTab":""],attrs:{"data-type":"1"}},[t._v("推送消息")])]),t._v(" "),e("div",{staticClass:"consult"},[t._l(t.data,function(a){return 2==t.type?e("div",{key:"consult"+a.id,staticClass:"consultItem clearfix"},[e("img",{staticClass:"avatar fl",attrs:{src:a.img,alt:""}}),t._v(" "),e("div",{staticClass:"info fl"},[e("div",{staticClass:"name"},[t._v("\n                "+t._s(a.username)+"\n                "),e("div",{staticClass:"time fr"},[e("span",{},[t._v(t._s(a.addtime))]),t._v(" "),e("router-link",{staticClass:"replyBtn",attrs:{to:"/"}},[t._v("查看")])],1)]),t._v(" "),e("div",[t._v("\n                "+t._s(a.content)+"\n              ")]),t._v(" "),e("div",{staticClass:"reply"},t._l(a.uerOper,function(a){return e("div",{key:"oper"+a.id},[t._v(t._s(a.name)+"："+t._s(a.content))])}),0)])]):t._e()}),t._v(" "),t._l(t.data,function(a,s){return 1==t.type?e("div",{key:"message"+a.id,staticClass:"consultItem box2 clearfix"},[e("div",{staticClass:"info fl"},[e("div",{staticClass:"name"},[t._v("\n                姓名 "+t._s(a.name)+"\n                "),e("span",{staticClass:"lockBtn",attrs:{"data-id":a.id},on:{click:t.detail}},[t._v("查看")]),t._v(" "),e("div",{},[t._v("手机号："+t._s(a.phone))])]),t._v(" "),e("div",{staticClass:"des"},[t._v("\n                "+t._s(a.content)+"\n              ")])])]):t._e()})],2),t._v(" "),e("el-pagination",{staticClass:"pages",attrs:{background:"",layout:"prev, pager, next",total:t.count}})],1)],1),t._v(" "),e("el-dialog",{attrs:{title:"消息通知",visible:t.centerDialogVisible,width:"30%",center:""},on:{"update:visible":function(a){t.centerDialogVisible=a}}},[e("div",{staticClass:"dialog"},[e("div",{staticClass:"head"},[t._v(t._s(t.currentContent.title))]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t.currentContent.addtime))]),t._v(" "),e("el-input",{staticClass:"content",attrs:{type:"textarea"}},[t._v("\n          "+t._s(t.currentContent.content)+"\n        ")])],1)])],1)},staticRenderFns:[]};var l=e("VU/8")(c,r,!1,function(t){e("QU4Q")},"data-v-ae99fdc6",null);a.default=l.exports}});
//# sourceMappingURL=12.09887e8321c726aff47f.js.map