(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f5e5a7f0"],{"642a":function(t,e,n){"use strict";var r=n("9336");n.n(r).a},9336:function(t,e,n){},f865:function(t,e,n){"use strict";n.r(e);var r=(n("96cf"),n("3b8d")),i={data:function(){return{html:"",contentStr:""}},created:function(){this.themeArticleDetail()},computed:{IsPC:function(){for(var t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=!0,r=0;r<e.length;r++)if(-1!=t.indexOf(e[r])){n=!1;break}return n}},beforeCreate:function(){document.querySelector("body").setAttribute("style","min-width:auto")},beforeDestroy:function(){document.querySelector("body").removeAttribute("style")},methods:{themeArticleDetail:function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("themeArticleDetail",{id:1});case 2:e=t.sent,n=e.data,r=n.result,1e3===n.status&&(1==r.articleType?(this.defaultContent=JSON.parse(r.contentStr),this.contentStr=r.contentStr,this.html=r.content):2==r.articleType?this.assignGZHCardData=JSON.parse(r.content):3==r.articleType&&(this.ruleForm.http=r.content),this.role_id=r.viewPermission);case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}},a=(n("642a"),n("2877")),o=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"themeArticleDetail",class:t.IsPC?"pcStyle":""},[n("div",{domProps:{innerHTML:t._s(t.html)}})])}),[],!1,null,null,null);e.default=o.exports}}]);
//# sourceMappingURL=chunk-f5e5a7f0.536ec949.js.map