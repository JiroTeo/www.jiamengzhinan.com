(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-linlin-home-index"],{"036e":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"homeMid"},[e("v-uni-image",{staticClass:"homePic",attrs:{src:"../../../static/home/homePic.jpg"}}),e("v-uni-view",{staticClass:"MidBox"},[e("v-uni-image",{staticClass:"textPic",attrs:{src:"../../../static/home/MidBoxText.png"}}),e("v-uni-view",{staticClass:"desc"},[e("v-uni-text",{staticClass:"i1"}),e("v-uni-text",[t._v("快速全面准确评估您与项目的匹配度")]),e("v-uni-text",{staticClass:"i2"})],1),e("v-uni-navigator",{staticClass:"Btn",attrs:{"open-type":"switchTab",url:"/pages/companion/companion"}},[e("v-uni-image",{attrs:{src:"../../../static/home/MidBoxBtn.png"}})],1)],1),e("v-uni-swiper",{staticClass:"scrollNav",attrs:{"indicator-dots":!0,"indicator-active-color":"#5592F8","indicator-color":"#CCCCCC"}},t._l(t.cateList,function(i){return e("v-uni-swiper-item",{staticClass:"swiper"},t._l(i,function(i,a){return e("v-uni-navigator",{staticClass:"swiperItem",attrs:{url:"../../search/searchList/searchList?classifyId="+i.id+"&classifyName="+i.name}},[e("v-uni-image",{attrs:{src:i.img_url,mode:""}}),e("v-uni-view",{staticClass:"name"},[t._v(t._s(i.name))])],1)}),1)}),1)],1),e("v-uni-view",[e("v-uni-view",{staticClass:"homeTitle clearfix"},[e("v-uni-view",{staticClass:"h2"},[t._v("热门专题")])],1),e("v-uni-view",{staticClass:"ztBox clearfix"},t._l(t.data.group,function(i){return e("v-uni-navigator",{staticClass:"item",attrs:{url:"../../productList/recommend?name="+i.name+"&id="+i.id}},[e("v-uni-image",{staticClass:"img",attrs:{src:i.img_url}}),e("v-uni-view",{staticClass:"text"},[e("v-uni-text",{staticClass:"b"},[t._v(t._s(i.name))]),e("v-uni-text",{staticClass:"i"},[t._v(t._s(i.sign))])],1)],1)}),1)],1),e("v-uni-view",[e("v-uni-view",{staticClass:"homeTitle clearfix"},[e("v-uni-view",{staticClass:"h2"},[t._v("热门推荐")])],1),e("v-uni-view",{staticClass:"recommendBox"},t._l(t.list,function(i,a){return e("v-uni-view",{key:a},[t._l(i.item,function(i){return e("v-uni-view",{key:"list"+i.id,staticClass:"dl"},[e("v-uni-view",{staticClass:"dt"},[e("v-uni-image",{attrs:{src:i.img_url}}),e("v-uni-view",[e("v-uni-view",{staticClass:"h3"},[t._v(t._s(i.name))]),e("v-uni-view",{staticClass:"desc"},[t._v(t._s(i.sign))]),e("v-uni-text",{staticClass:"tag clearfix"},[e("v-uni-text",[t._v(t._s(i.cate))])],1)],1)],1),e("v-uni-view",{staticClass:"clearfix dd"},[e("v-uni-text",[t._v("已申请："+t._s(i.apply))]),e("v-uni-text",[t._v("门店数："+t._s(i.shop_count))]),e("v-uni-label",[e("v-uni-text",[t._v(t._s(i.min_money)+"~"+t._s(i.max_money)+"万")]),t._v("元")],1)],1),e("v-uni-navigator",{staticClass:"href_aaa",attrs:{url:"../../productList/productDetail/productDetail?id="+i.id}})],1)}),t._l(i.article,function(i){return e("v-uni-view",{key:"article"+i.id,staticClass:"speview"},[e("v-uni-view",{staticClass:"h3"},[t._v(t._s(i.title))]),e("v-uni-text",{staticClass:"tag"},[t._v("行业报告")]),e("v-uni-image",{attrs:{src:i.img}}),e("v-uni-text",{staticClass:"desc clearfix"},[e("v-uni-text",{staticClass:"fl"},[t._v("阅读："+t._s(i.read_num))]),e("v-uni-text",{staticClass:"fr"},[t._v(t._s(i.username))]),e("v-uni-text",{staticClass:"fr"},[t._v("更新："+t._s(i.addtime))])],1),e("v-uni-navigator",{staticClass:"href_aaa",attrs:{url:"../find/detail?id="+i.id}})],1)})],2)}),1)],1),t.emptyShow?e("v-uni-view",{staticClass:"emptyBox"},[e("v-uni-image",{attrs:{src:"../../../static/personal/empty.png"}}),e("v-uni-text",[t._v("暂无数据")])],1):t._e()],1)},s=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return s})},"1e07":function(t,i,e){"use strict";e.r(i);var a=e("e3c2"),s=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);i["default"]=s.a},"60c0":function(t,i,e){"use strict";var a=e("ce97"),s=e.n(a);s.a},b817:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,"/*@import '../../styles/home.css';*/body[data-v-f129bdbc]{background:#fff!important}\n/* 轮播图样式 */.swiper[data-v-f129bdbc]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0 %?38?%;-webkit-box-sizing:border-box;box-sizing:border-box}.swiper .swiperItem[data-v-f129bdbc]{width:%?100?%;text-align:center;margin-right:%?85?%}.swiper .swiperItem uni-image[data-v-f129bdbc]{width:%?90?%;height:%?90?%}.swiper .swiperItem .name[data-v-f129bdbc]{font-size:%?22?%;color:#333}.swiper .swiperItem[data-v-f129bdbc]:nth-of-type(4n+4){margin-right:0}\n/* 轮播图样式 */.homeMid[data-v-f129bdbc]{position:relative}.homeMid .homePic[data-v-f129bdbc]{display:block;width:100%;height:%?295?%;margin-bottom:%?270?%}.homeMid .MidBox[data-v-f129bdbc]{width:92%;height:%?360?%;position:absolute;left:4%;top:%?144?%;-webkit-border-radius:%?3?%;-moz-border-radius:%?3?%;border-radius:%?3?%;background:#fff;-webkit-box-shadow:0 %?5?% %?20?% #e8e8e8;box-shadow:0 %?5?% %?20?% #e8e8e8}.homeMid .MidBox .textPic[data-v-f129bdbc]{display:block;width:83%;height:%?50?%;margin:%?88?% auto 0}.homeMid .MidBox .desc[data-v-f129bdbc]{width:%?495?%;height:%?30?%;line-height:%?30?%;text-align:center;color:#919499;font-size:%?24?%;margin:%?24?% auto %?14?%;position:relative}.homeMid .MidBox .desc i[data-v-f129bdbc]{width:%?34?%;height:%?1?%;background:#c8c9cc;position:absolute;top:49%}.homeMid .MidBox .desc .i1[data-v-f129bdbc]{left:0}.homeMid .MidBox .desc .i2[data-v-f129bdbc]{right:0}.homeMid .MidBox .Btn[data-v-f129bdbc]{display:block;width:84%;height:%?122?%;margin:0 auto}.homeMid .MidBox .Btn uni-image[data-v-f129bdbc]{display:block;width:100%;height:100%}.homeMid .scrollNav[data-v-f129bdbc]{width:100%;height:%?340?%}.homeTitle[data-v-f129bdbc]{padding:0 4%;height:%?56?%;line-height:%?56?%}.homeTitle .h2[data-v-f129bdbc]{float:left;font-size:%?32?%;color:#1a1a1a;font-weight:700}.homeTitle .item[data-v-f129bdbc]{float:right;width:%?210?%;height:%?56?%;line-height:%?56?%;\n  /* todo\n      background: url(\"./img/issueBg.png\") no-repeat;\n\n       */background-color:#4f76f4;background-size:100%;color:#fff;font-size:%?26?%;text-align:center;-webkit-border-radius:%?5?%;border-radius:%?5?%}.homeTitle .item uni-image[data-v-f129bdbc]{width:%?19?%;height:%?19?%}.ztBox[data-v-f129bdbc]{margin:%?12?% 0 %?48?%;padding:0 0 0 4%}.ztBox .item[data-v-f129bdbc]{float:left;width:%?340?%;height:%?200?%;margin-right:1.3%;margin-bottom:%?10?%;position:relative}.ztBox .item uni-image[data-v-f129bdbc]{display:block;width:100%;height:100%}.ztBox .item .text[data-v-f129bdbc]{width:92%;height:100%;padding:0 0 0 8%;position:absolute;left:0;top:0;z-index:10;color:#fff}.ztBox .item .text .b[data-v-f129bdbc]{display:block;font-size:%?32?%;margin-top:%?40?%}.ztBox .item .text .i[data-v-f129bdbc]{font-size:%?24?%;color:hsla(0,0%,100%,.5)}.recommendBox .dl[data-v-f129bdbc]{padding:%?30?% 0 0;width:92%;margin:0 auto;border-bottom:%?1?% solid #f0f0f0;position:relative}.recommendBox .dl .dt[data-v-f129bdbc]{width:100%;height:%?200?%}.recommendBox .dl .dt uni-image[data-v-f129bdbc]{float:left;width:%?200?%;height:%?200?%;-webkit-border-radius:%?6?%;-moz-border-radius:%?6?%;border-radius:%?6?%}.recommendBox .dl .dt uni-view[data-v-f129bdbc]{float:right;width:%?450?%}.recommendBox .dl .dt uni-view .h3[data-v-f129bdbc]{height:%?30?%;line-height:%?30?%;font-size:%?30?%;color:#141414;overflow:hidden;-ms-text-overflow:ellipsis;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;margin:%?13?% 0 %?20?%}.recommendBox .dl .dt uni-view .desc[data-v-f129bdbc]{height:%?70?%;font-size:%?22?%;color:#919499;line-height:%?36?%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;margin-bottom:%?25?%}.recommendBox .dl .dt uni-view .tag[data-v-f129bdbc]{float:left;height:%?40?%;line-height:%?40?%;border:%?1?% solid #88afff;-webkit-border-radius:%?2?%;-moz-border-radius:%?2?%;border-radius:%?2?%;color:#6e93ff;font-size:%?22?%;padding:0 %?30?%}.recommendBox .dl .dd[data-v-f129bdbc]{height:%?80?%;line-height:%?80?%;font-size:%?22?%;color:#919499}.recommendBox .dl .dd uni-text[data-v-f129bdbc]{float:left;margin-right:%?10?%}.recommendBox .dl .dd uni-label[data-v-f129bdbc]{float:right}.recommendBox .dl .dd uni-label uni-text[data-v-f129bdbc]{font-size:%?30?%;color:#f4731d}.speview[data-v-f129bdbc]{padding:%?30?% 0 0;width:92%;margin:0 auto;border-bottom:%?1?% solid #f0f0f0;position:relative}.speview .h3[data-v-f129bdbc]{height:%?30?%;line-height:%?30?%;font-size:%?30?%;color:#141414;overflow:hidden;-ms-text-overflow:ellipsis;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;margin:0 0 %?20?%}.speview uni-image[data-v-f129bdbc]{display:block;width:100%;height:%?260?%;-webkit-border-radius:%?4?%;-moz-border-radius:%?4?%;border-radius:%?4?%}.speview .tag[data-v-f129bdbc]{width:%?120?%;height:%?42?%;font-size:%?22?%;line-height:%?42?%;text-align:center;border:%?1?% solid #fff;-webkit-border-radius:%?3?%;-moz-border-radius:%?3?%;border-radius:%?3?%;position:absolute;right:%?24?%;top:%?120?%;z-index:10;color:#fff}.speview .desc[data-v-f129bdbc]{height:%?80?%;line-height:%?80?%;font-size:%?22?%;color:#919499}.speview .desc uni-text[data-v-f129bdbc]:nth-child(3){margin-right:%?25?%}",""])},ce97:function(t,i,e){var a=e("b817");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("e884a0be",a,!0,{sourceMap:!1,shadowMode:!1})},e3c2:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"index.vue",data:function(){return{emptyShow:!1,data:"",page:1,cateList:[],list:"",loading:!1}},methods:{getData:function(){var t=this;this.request({url:"/wap/index/index_list",data:{},method:"get",success:function(i){i.code;var e=i.data;i.msg;t.data=e;for(var a=Math.ceil(e.cate.length/8),s=[],o=0;o<a;o++)s.push(e.cate.splice(0,8));t.cateList=s},fail:function(t){console.log("fail",t)}})},getArticleList:function(){var t=this,i=this.page;this.loading=!0,this.request({url:"/wap/index/item_list",data:{page:this.page},method:"get",success:function(e){e.code;var a=e.data;e.msg;t.loading=!1,console.log("page",i),1==i?0==a.length?t.emptyShow=!0:t.list=["",a]:t.$set(t.list,i,a)},fail:function(t){console.log("fail",t)}})}},onLoad:function(){this.getData(),this.getArticleList()},onReachBottom:function(){var t=this.page,i=this.list,e=this.loading;e||0==i[t].item.length?uni.showToast({title:"没有更多了呦～",icon:"none"}):(this.page++,this.getArticleList())}};i.default=a},ef29:function(t,i,e){"use strict";e.r(i);var a=e("036e"),s=e("1e07");for(var o in s)"default"!==o&&function(t){e.d(i,t,function(){return s[t]})}(o);e("60c0");var d=e("2877"),n=Object(d["a"])(s["default"],a["a"],a["b"],!1,null,"f129bdbc",null);i["default"]=n.exports}}]);