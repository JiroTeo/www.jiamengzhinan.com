(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-linlin-personal-collect-article_information"],{"176c":function(t,i,a){var e=a("a728");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("90725c18",e,!0,{sourceMap:!1,shadowMode:!1})},"5ec8":function(t,i,a){"use strict";var e=a("176c"),n=a.n(e);n.a},a1c3:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{emptyShow:!1,list:[],page:1,loading:!1}},onLoad:function(){this.getData()},methods:{returnClick:function(){uni.navigateTo({url:"collect"})},getData:function(){var t=this,i=this.page;this.loading=!0,this.request({url:"/wap/follow/get_coll_article",methods:"get",data:{type:3,ftype:1},success:function(a){a.code;var e=a.data;a.msg;t.loading=!1,console.log("page",i),console.log(e),1==i?0==e.length?t.emptyShow=!0:t.list=["",e]:t.$set(t.list,i,e)},fail:function(t){console.log("fail",t)}})}},onReachBottom:function(){console.log("下拉加载...");var t=this.page,i=this.list,a=this.loading;a||0==i[t].length?uni.showLoading({title:"没有更多了...",duration:800}):(this.page++,this.getData())}};i.default=e},a728:function(t,i,a){i=t.exports=a("2350")(!1),i.push([t.i,".article[data-v-0293d013]{min-height:100vh;background-color:#f5f6fb}.editBtn[data-v-0293d013],.finishBtn[data-v-0293d013]{font-size:%?30?%;position:absolute;right:4%;top:0}.findNav[data-v-0293d013]{width:100%;height:%?88?%;line-height:%?88?%;text-align:center;-webkit-box-shadow:0 %?1?% %?10?% #edeef2;box-shadow:0 %?1?% %?10?% #edeef2;font-size:%?28?%;margin-bottom:%?20?%;background:#fff}.findNav uni-navigator[data-v-0293d013]{display:inline-block;margin:0 8%;height:%?88?%;line-height:%?88?%;position:relative;color:#919499}.findNav uni-navigator.current[data-v-0293d013]{color:#000;font-size:%?32?%}.findNav uni-navigator.current uni-text[data-v-0293d013]{width:%?34?%;height:%?8?%;background:-webkit-gradient(linear,100% 0,0 0,from(#4f74f4),to(#579efa));background:-webkit-linear-gradient(180deg,#4f74f4,#579efa);background:-moz-linear-gradient(to bottom,#4f74f4,#579efa);background:-o-linear-gradient(to bottom,#4f74f4,#579efa);background:-webkit-gradient(linear,left top,left bottom,from(#4f74f4),to(#579efa));background:-webkit-linear-gradient(top,#4f74f4,#579efa);background:-o-linear-gradient(top,#4f74f4,#579efa);background:linear-gradient(180deg,#4f74f4,#579efa);-webkit-border-radius:%?4?%;-moz-border-radius:%?4?%;border-radius:%?4?%;position:absolute;left:50%;margin-left:%?-17?%;bottom:%?10?%}.findList .dl[data-v-0293d013]{width:92%;padding:0 4%;margin:0 auto %?20?%;position:relative;background:#fff}.findList .dl .title[data-v-0293d013]{height:%?30?%;line-height:%?30?%;font-size:%?30?%;color:#141414;overflow:hidden;-ms-text-overflow:ellipsis;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;padding:%?30?% 0}.findList .dl .imgBox uni-image[data-v-0293d013]{float:left;width:32.7%;height:%?168?%;margin-right:.8%}.findList .dl .imgBox uni-image[data-v-0293d013]:last-child{margin-right:0}.findList .dl .btns[data-v-0293d013]{height:%?77?%;line-height:%?77?%;font-size:%?22?%;color:#919499}.findList .dl .btns uni-view[data-v-0293d013]{background-position:0;-webkit-background-size:%?32?%;background-size:%?32?%;background-repeat:no-repeat;margin-right:%?40?%}.findList .dl .btns uni-view uni-image[data-v-0293d013]{width:%?32?%;height:%?32?%;vertical-align:middle;margin-right:%?10?%}.findList .dl .btns uni-view uni-text[data-v-0293d013]{display:inline-block;vertical-align:middle}.findList .dl .btns .time[data-v-0293d013]{margin-right:0}",""])},e706:function(t,i,a){"use strict";a.r(i);var e=a("a1c3"),n=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(i,t,function(){return e[t]})}(o);i["default"]=n.a},ee84:function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"article"},[a("v-uni-view",{staticClass:"common-head"},[a("v-uni-image",{staticClass:"arrow-back",attrs:{src:"../../../../static/icon_arrow.png"},on:{click:function(i){i=t.$handleEvent(i),t.returnClick(i)}}}),a("v-uni-view",{staticClass:"common-title"},[t._v("文章收藏")])],1),a("v-uni-view",{staticClass:"findNav"},[a("v-uni-navigator",{staticClass:"current",attrs:{url:"article_information"}},[t._v("加盟资讯"),a("v-uni-text")],1),a("v-uni-navigator",{attrs:{url:"article_strategy"}},[t._v("加盟攻略"),a("v-uni-text")],1),a("v-uni-navigator",{attrs:{url:"article_report"}},[t._v("行业报告"),a("v-uni-text")],1)],1),a("v-uni-view",{staticClass:"findList"},t._l(t.list,function(i,e){return a("v-uni-view",{key:e},t._l(i,function(i,e){return a("v-uni-view",{key:i.id,staticClass:"dl"},[a("v-uni-view",[a("v-uni-view",{staticClass:"title"},[t._v(t._s(i.title))]),a("v-uni-view",{staticClass:"imgBox clearfix"},t._l(i.img,function(t){return a("v-uni-image",{attrs:{src:t}})}),1)],1),a("v-uni-view",{staticClass:"btns clearfix"},[a("v-uni-view",{staticClass:"fl"},[a("v-uni-image",{attrs:{src:"../../../../static/find/discuss.png"}}),a("v-uni-text",[t._v(t._s(i.comment_num))])],1),a("v-uni-view",{staticClass:"fl"},[a("v-uni-image",{attrs:{src:"../../../../static/find/look.png"}}),a("v-uni-text",[t._v(t._s(i.read_num))])],1),a("v-uni-view",{staticClass:"fr time"},[a("v-uni-text",[t._v(t._s(i.addtime))])],1)],1),a("v-uni-navigator",{staticClass:"href_aaa",attrs:{url:"../../find/detail?id="+i.id}})],1)}),1)}),1),t.emptyShow?a("v-uni-view",{staticClass:"emptyBox"},[a("v-uni-image",{attrs:{src:"../../../../static/personal/empty.png"}}),a("v-uni-text",[t._v("暂无数据")])],1):t._e()],1)},n=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return n})},fdf7:function(t,i,a){"use strict";a.r(i);var e=a("ee84"),n=a("e706");for(var o in n)"default"!==o&&function(t){a.d(i,t,function(){return n[t]})}(o);a("5ec8");var r=a("2877"),s=Object(r["a"])(n["default"],e["a"],e["b"],!1,null,"0293d013",null);i["default"]=s.exports}}]);