(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{306:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},307:function(t,n,c){var s=c(23),e="["+c(306)+"]",o=RegExp("^"+e+e+"*"),a=RegExp(e+e+"*$"),r=function(t){return function(n){var c=String(s(n));return 1&t&&(c=c.replace(o,"")),2&t&&(c=c.replace(a,"")),c}};t.exports={start:r(1),end:r(2),trim:r(3)}},308:function(t,n,c){"use strict";var s=c(1),e=c(307).trim;s({target:"String",proto:!0,forced:c(309)("trim")},{trim:function(){return e(this)}})},309:function(t,n,c){var s=c(2),e=c(306);t.exports=function(t){return s((function(){return!!e[t]()||"​᠎"!="​᠎"[t]()||e[t].name!==t}))}},317:function(t,n,c){var s=c(5),e=c(97);t.exports=function(t,n,c){var o,a;return e&&"function"==typeof(o=n.constructor)&&o!==c&&s(a=o.prototype)&&a!==c.prototype&&e(t,a),t}},319:function(t,n,c){"use strict";var s=c(7),e=c(4),o=c(96),a=c(11),r=c(8),i=c(26),l=c(317),v=c(45),p=c(2),w=c(29),u=c(69).f,f=c(24).f,d=c(9).f,_=c(307).trim,h=e.Number,g=h.prototype,C="Number"==i(w(g)),m=function(t){var n,c,s,e,o,a,r,i,l=v(t,!1);if("string"==typeof l&&l.length>2)if(43===(n=(l=_(l)).charCodeAt(0))||45===n){if(88===(c=l.charCodeAt(2))||120===c)return NaN}else if(48===n){switch(l.charCodeAt(1)){case 66:case 98:s=2,e=49;break;case 79:case 111:s=8,e=55;break;default:return+l}for(a=(o=l.slice(2)).length,r=0;r<a;r++)if((i=o.charCodeAt(r))<48||i>e)return NaN;return parseInt(o,s)}return+l};if(o("Number",!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var b,N=function(t){var n=arguments.length<1?0:t,c=this;return c instanceof N&&(C?p((function(){g.valueOf.call(c)})):"Number"!=i(c))?l(new h(m(n)),c,N):m(n)},E=s?u(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),y=0;E.length>y;y++)r(h,b=E[y])&&!r(N,b)&&d(N,b,f(h,b));N.prototype=g,g.constructor=N,a(e,"Number",N)}},342:function(t,n,c){},343:function(t,n,c){},344:function(t,n,c){},388:function(t,n,c){"use strict";c(342)},389:function(t,n,c){"use strict";c(343)},390:function(t,n,c){"use strict";c(344)},410:function(t,n,c){"use strict";c.r(n);c(44),c(66),c(308),c(174),c(94),c(169),c(319),c(98),c(95);var s=c(41),e=function(t){var n=Object.keys(t),c=!0;return n.forEach((function(t){["span","offset"].includes(t)||(c=!1)})),c},o={name:"wheelCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:e},narrowpc:{type:Object,validator:e},pc:{type:Object,validator:e},widepc:{type:Object,validator:e},largepc:{type:Object,validator:e}},data:function(){return{gutter:0}},computed:{colClass:function(){var t=this.span,n=this.offset,c=this.ipad,e=this.narrowpc,o=this.pc,a=this.widepc,r=this.largepc,i=this.createClasses;return[].concat(Object(s.a)(i({span:t,offset:n})),Object(s.a)(i(c,"ipad-")),Object(s.a)(i(e,"narrowpc-")),Object(s.a)(i(o,"pc-")),Object(s.a)(i(a,"widepc-")),Object(s.a)(i(r,"largepc-")))},colStyle:function(){var t=this.gutter;return{paddingLeft:t/2+"px",paddingRight:t/2+"px"}}},methods:{createClasses:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=[];return t?(t.span&&c.push("col-".concat(n).concat(t.span)),(t.offset||0===t.offset)&&c.push("offset-".concat(n).concat(t.offset)),c):[]}}},a=(c(388),c(43)),r=Object(a.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)}),[],!1,null,"1760e4ba",null).exports,i={name:"wheelRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].includes(t)}}},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach((function(n){n.gutter=t.gutter}))}},l=(c(389),{name:"grid-demo",components:{"w-col":r,"w-row":Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)}),[],!1,null,"22b1fa34",null).exports},data:function(){return{defaultContent:'\n    <w-row>\n        <w-col span="2">\n          <div class="col-content">1</div>\n        </w-col>\n        <w-col span="2">\n          <div class="col-content">2</div>\n        </w-col>\n        <w-col span="2">\n          <div class="col-content">3</div>\n        </w-col>\n        <w-col span="18">\n          <div class="col-content">4</div>\n        </w-col>\n    '.replace(/\t+| {2,}/g,"").trim(),leftContent:'\n<w-row>\n        <w-col>\n          <div class="col-content">1</div>\n        </w-col>\n        <w-col>\n          <div class="col-content">2</div>\n        </w-col>\n      </w-row>\n    <w-row align="right">\n        <w-col>\n          <div class="col-content">1</div>\n        </w-col>\n        <w-col>\n          <div class="col-content">2</div>\n        </w-col>\n      </w-row>\n    '.replace(/\t+| {2,}/g,"").trim(),reactiveContent:'\n     <w-row gutter="20">\n        <w-col span="24" :pc="{span:4}" :widepc="{span:6}" :narrowpc="{span:6}">\n          <div class="col-content">1</div>\n        </w-col>\n        <w-col span="24" :pc="{span:4}" :widepc="{span:6}" :narrowpc="{span:6}">\n          <div class="col-content">2</div>\n        </w-col>\n        <w-col span="24" :pc="{span:6}" :widepc="{span:6}" :narrowpc="{span:6}">\n          <div class="col-content">3</div>\n        </w-col>\n        <w-col span="24" :pc="{span:8,offset:2}" :widepc="{span:6,offset:0}" :narrowpc="{span:6}">\n          <div class="col-content">4</div>\n        </w-col>\n      </w-row>\n    '.replace(/\t+| {2,}/g,"").trim(),offsetContent:'\n     <w-row gutter="20">\n        <w-col span="2">\n          <div class="col-content">1</div>\n        </w-col>\n        <w-col span="2">\n          <div class="col-content">2</div>\n        </w-col>\n        <w-col span="4">\n          <div class="col-content">3</div>\n        </w-col>\n        <w-col span="6">\n          <div class="col-content">4</div>\n        </w-col>\n        <w-col span="8" offset="2">\n          <div class="col-content">5</div>\n        </w-col>\n      </w-row>\n    '.replace(/\t+| {2,}/g,"").trim(),gutterContent:'\n     <w-row gutter="20">\n        <w-col span="2">\n          <div class="col-content">1</div>\n        </w-col>\n        <w-col span="4">\n          <div class="col-content">2</div>\n        </w-col>\n        <w-col span="6" offset="4">\n          <div class="col-content">3</div>\n        </w-col>\n        <w-col span="8">\n          <div class="col-content">4</div>\n        </w-col>\n      </w-row>\n    '.replace(/\t+| {2,}/g,"").trim()}}}),v=(c(390),Object(a.a)(l,(function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"row"},[c("div",{staticClass:"default"},[c("h3",[t._v("1. 默认样式")]),t._v(" "),c("w-row",[c("w-col",{attrs:{span:"2"}},[c("div",{staticClass:"col-content"},[t._v("1")])]),t._v(" "),c("w-col",{attrs:{span:"2"}},[c("div",{staticClass:"col-content"},[t._v("2")])]),t._v(" "),c("w-col",{attrs:{span:"2"}},[c("div",{staticClass:"col-content"},[t._v("3")])]),t._v(" "),c("w-col",{attrs:{span:"18"}},[c("div",{staticClass:"col-content"},[t._v("4")])])],1),t._v(" "),t._m(0),t._v(" "),c("pre",[c("code",[t._v(t._s(t.defaultContent))])])],1),t._v(" "),c("div",{staticClass:"left"},[c("h3",[t._v("2. align，默认靠左")]),t._v(" "),c("w-row",[c("w-col",[c("div",{staticClass:"col-content"},[t._v("1")])]),t._v(" "),c("w-col",[c("div",{staticClass:"col-content"},[t._v("2")])])],1),t._v(" "),c("w-row",{attrs:{align:"right"}},[c("w-col",[c("div",{staticClass:"col-content"},[t._v("1")])]),t._v(" "),c("w-col",[c("div",{staticClass:"col-content"},[t._v("2")])])],1),t._v(" "),t._m(1),t._v(" "),c("pre",[c("code",[t._v(t._s(t.leftContent))])])],1),t._v(" "),c("div",{staticClass:"reactive"},[c("h3",[t._v("3. 响应式布局,默认手机端")]),t._v(" "),c("w-row",{attrs:{gutter:"20"}},[c("w-col",{attrs:{span:"24",pc:{span:4},widepc:{span:6},narrowpc:{span:6}}},[c("div",{staticClass:"col-content"},[t._v("1")])]),t._v(" "),c("w-col",{attrs:{span:"24",pc:{span:4},widepc:{span:6},narrowpc:{span:6}}},[c("div",{staticClass:"col-content"},[t._v("2")])]),t._v(" "),c("w-col",{attrs:{span:"24",pc:{span:6},widepc:{span:6},narrowpc:{span:6}}},[c("div",{staticClass:"col-content"},[t._v("3")])]),t._v(" "),c("w-col",{attrs:{span:"24",pc:{span:8,offset:2},widepc:{span:6,offset:0},narrowpc:{span:6}}},[c("div",{staticClass:"col-content"},[t._v("4")])])],1),t._v(" "),t._m(2),t._v(" "),c("pre",[c("code",[t._v(t._s(t.reactiveContent))])])],1),t._v(" "),c("div",{staticClass:"gutter"},[c("h3",[t._v("4. gutter等于20")]),t._v(" "),c("w-row",{attrs:{gutter:"20"}},[c("w-col",{attrs:{span:"2"}},[c("div",{staticClass:"col-content"},[t._v("1")])]),t._v(" "),c("w-col",{attrs:{span:"4"}},[c("div",{staticClass:"col-content"},[t._v("2")])]),t._v(" "),c("w-col",{attrs:{span:"6",offset:"4"}},[c("div",{staticClass:"col-content"},[t._v("3")])]),t._v(" "),c("w-col",{attrs:{span:"8"}},[c("div",{staticClass:"col-content"},[t._v("4")])])],1),t._v(" "),t._m(3),t._v(" "),c("pre",[c("code",[t._v(t._s(t.gutterContent))])])],1),t._v(" "),c("div",{staticClass:"gutter-offset"},[c("h3",[t._v("5. gutter等于20，offset等于2")]),t._v(" "),c("w-row",{attrs:{gutter:"20"}},[c("w-col",{attrs:{span:"2"}},[c("div",{staticClass:"col-content"},[t._v("1")])]),t._v(" "),c("w-col",{attrs:{span:"2"}},[c("div",{staticClass:"col-content"},[t._v("2")])]),t._v(" "),c("w-col",{attrs:{span:"4"}},[c("div",{staticClass:"col-content"},[t._v("3")])]),t._v(" "),c("w-col",{attrs:{span:"6"}},[c("div",{staticClass:"col-content"},[t._v("4")])]),t._v(" "),c("w-col",{attrs:{span:"8",offset:"2"}},[c("div",{staticClass:"col-content"},[t._v("5")])])],1),t._v(" "),t._m(4),t._v(" "),c("pre",[c("code",[t._v(t._s(t.offsetContent))])])],1)])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("span设置grid占比")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("align设置位置，可以是left，center，right")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("默认手机端，pc电脑端，widepc宽屏，narrowpc窄屏")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("gutter设置间隙")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("offset设置偏移位置")])])}],!1,null,"6f4d5baa",null));n.default=v.exports}}]);