!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=11)}([,,,,,,,function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t,n){function i(e,t){return(void 0===e?"undefined":r(e))===t}function s(e){var t=S.className,n=z._config.classPrefix||"";if(E&&(t=t.baseVal),z._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}z._config.enableClasses&&(t+=" "+n+e.join(" "+n),E?S.className.baseVal=t:S.className=t)}function a(e,t){return!!~(""+e).indexOf(t)}function o(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):E?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function c(){var e=t.body;return e||(e=o(E?"svg":"body"),e.fake=!0),e}function u(e,n,r,i){var s,a,u,l,f="modernizr",d=o("div"),p=c();if(parseInt(r,10))for(;r--;)u=o("div"),u.id=i?i[r]:f+(r+1),d.appendChild(u);return s=o("style"),s.type="text/css",s.id="s"+f,(p.fake?p:d).appendChild(s),p.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",l=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),a=n(d,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=l,S.offsetHeight):d.parentNode.removeChild(d),!!a}function l(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function f(t,n,r){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var s=e.console;if(null!==i)r&&(i=i.getPropertyValue(r));else if(s){var a=s.error?"error":"log";s[a].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else i=!n&&t.currentStyle&&t.currentStyle[r];return i}function d(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(l(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];i--;)s.push("("+l(t[i])+":"+r+")");return s=s.join(" or "),u("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==f(e,null,"position")})}return n}function p(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function m(e,t,r,s){function c(){l&&(delete L.style,delete L.modElem)}if(s=!i(s,"undefined")&&s,!i(r,"undefined")){var u=d(e,r);if(!i(u,"undefined"))return u}for(var l,f,m,A,h,g=["modernizr","tspan","samp"];!L.style&&g.length;)l=!0,L.modElem=o(g.shift()),L.style=L.modElem.style;for(m=e.length,f=0;f<m;f++)if(A=e[f],h=L.style[A],a(A,"-")&&(A=p(A)),L.style[A]!==n){if(s||i(r,"undefined"))return c(),"pfx"!=t||A;try{L.style[A]=r}catch(e){}if(L.style[A]!=h)return c(),"pfx"!=t||A}return c(),!1}function A(e,t){return function(){return e.apply(t,arguments)}}function h(e,t,n){var r;for(var s in e)if(e[s]in t)return n===!1?e[s]:(r=t[e[s]],i(r,"function")?A(r,n||t):r);return!1}function g(e,t,n,r,s){var a=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+T.join(a+" ")+a).split(" ");return i(t,"string")||i(t,"undefined")?m(o,t,r,s):(o=(e+" "+P.join(a+" ")+a).split(" "),h(o,t,n))}function v(e,t,r){return g(e,n,n,t,r)}function y(e,t){if("object"==(void 0===e?"undefined":r(e)))for(var n in e)R(e,n)&&y(n,e[n]);else{e=e.toLowerCase();var i=e.split("."),a=z[i[0]];if(2==i.length&&(a=a[i[1]]),void 0!==a)return z;t="function"==typeof t?t():t,1==i.length?z[i[0]]=t:(!z[i[0]]||z[i[0]]instanceof Boolean||(z[i[0]]=new Boolean(z[i[0]])),z[i[0]][i[1]]=t),s([(t&&0!=t?"":"no-")+i.join("-")]),z._trigger(e,t)}return z}var b=[],w={_version:"3.4.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){b.push({name:e,fn:t,options:n})},addAsyncTest:function(e){b.push({name:null,fn:e})}},z=function(){};z.prototype=w,z=new z;var C=[],S=t.documentElement,E="svg"===S.nodeName.toLowerCase(),x="Moz O ms Webkit",T=w._config.usePrefixes?x.split(" "):[];w._cssomPrefixes=T;var _={elem:o("modernizr")};z._q.push(function(){delete _.elem});var L={style:_.elem.style};z._q.unshift(function(){delete L.style});var P=w._config.usePrefixes?x.toLowerCase().split(" "):[];w._domPrefixes=P,w.testAllProps=g,w.testAllProps=v,z.addTest("flexbox",v("flexBasis","1px",!0)),z.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var M="CSS"in e&&"supports"in e.CSS,B="supportsCSS"in e;z.addTest("supports",M||B),z.addTest("target",function(){var t=e.document;if(!("querySelectorAll"in t))return!1;try{return t.querySelectorAll(":target"),!0}catch(e){return!1}}),z.addTest("hidden","hidden"in o("a"));var R;!function(){var e={}.hasOwnProperty;R=i(e,"undefined")||i(e.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),w._l={},w.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),z.hasOwnProperty(e)&&setTimeout(function(){z._trigger(e,z[e])},0)},w._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},z._q.push(function(){w.addTest=y}),z.addAsyncTest(function(){var e,t,n,r=o("img"),i="sizes"in r;!i&&"srcset"in r?(t="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n=function(){y("sizes",2==r.width)},r.onload=n,r.onerror=n,r.setAttribute("sizes","9px"),r.srcset=e+" 1w,"+t+" 8w",r.src=e):y("sizes",i)}),z.addTest("srcset","srcset"in o("img")),function(){var e,t,n,r,s,a,o;for(var c in b)if(b.hasOwnProperty(c)){if(e=[],t=b[c],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=i(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)a=e[s],o=a.split("."),1===o.length?z[o[0]]=r:(!z[o[0]]||z[o[0]]instanceof Boolean||(z[o[0]]=new Boolean(z[o[0]])),z[o[0]][o[1]]=r),C.push((r?"":"no-")+o.join("-"))}}(),s(C),delete w.addTest,delete w.addAsyncTest;for(var N=0;N<z._q.length;N++)z._q[N]();e.Modernizr=z}(window,document)},function(e,t){!function(t,n){var r=function(e,t){"use strict";if(t.getElementsByClassName){var n,r=t.documentElement,i=e.Date,s=e.HTMLPictureElement,a=e.addEventListener,o=e.setTimeout,c=e.requestAnimationFrame||o,u=e.requestIdleCallback,l=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],d={},p=Array.prototype.forEach,m=function(e,t){return d[t]||(d[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),d[t].test(e.getAttribute("class")||"")&&d[t]},A=function(e,t){m(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},h=function(e,t){var n;(n=m(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},g=function(e,t,n){var r=n?"addEventListener":"removeEventListener";n&&g(e,t),f.forEach(function(n){e[r](n,t)})},v=function(e,n,r,i,s){var a=t.createEvent("CustomEvent");return a.initCustomEvent(n,!i,!s,r||{}),e.dispatchEvent(a),a},y=function(t,r){var i;!s&&(i=e.picturefill||n.pf)?i({reevaluate:!0,elements:[t]}):r&&r.src&&(t.src=r.src)},b=function(e,t){return(getComputedStyle(e,null)||{})[t]},w=function(e,t,r){for(r=r||e.offsetWidth;r<n.minSize&&t&&!e._lazysizesWidth;)r=t.offsetWidth,t=t.parentNode;return r},z=function(){var e,n,r=[],i=[],s=r,a=function(){var t=s;for(s=r.length?i:r,e=!0,n=!1;t.length;)t.shift()();e=!1},u=function(r,i){e&&!i?r.apply(this,arguments):(s.push(r),n||(n=!0,(t.hidden?o:c)(a)))};return u._lsFlush=a,u}(),C=function(e,t){return t?function(){z(e)}:function(){var t=this,n=arguments;z(function(){e.apply(t,n)})}},S=function(e){var t,n=0,r=666,s=function(){t=!1,n=i.now(),e()},a=u?function(){u(s,{timeout:r}),666!==r&&(r=666)}:C(function(){o(s)},!0);return function(e){var s;(e=e===!0)&&(r=44),t||(t=!0,s=125-(i.now()-n),s<0&&(s=0),e||s<9&&u?a():o(a,s))}},E=function(e){var t,n,r=function(){t=null,e()},s=function(){var e=i.now()-n;e<99?o(s,99-e):(u||r)(r)};return function(){n=i.now(),t||(t=o(s,99))}},x=function(){var s,c,u,f,d,w,x,_,L,P,M,B,R,N,k,W=/^img$/i,D=/^iframe$/i,O="onscroll"in e&&!/glebot/.test(navigator.userAgent),$=0,I=0,U=-1,j=function(e){I--,e&&e.target&&g(e.target,j),(!e||I<0||!e.target)&&(I=0)},q=function(e,n){var i,s=e,a="hidden"==b(t.body,"visibility")||"hidden"!=b(e,"visibility");for(L-=n,B+=n,P-=n,M+=n;a&&(s=s.offsetParent)&&s!=t.body&&s!=r;)(a=(b(s,"opacity")||1)>0)&&"visible"!=b(s,"overflow")&&(i=s.getBoundingClientRect(),a=M>i.left&&P<i.right&&B>i.top-1&&L<i.bottom+1);return a},F=function(){var e,i,a,o,l,f,p,m,A;if((d=n.loadMode)&&I<8&&(e=s.length)){i=0,U++,null==N&&("expand"in n||(n.expand=r.clientHeight>500&&r.clientWidth>500?500:370),R=n.expand,N=R*n.expFactor),$<N&&I<1&&U>2&&d>2&&!t.hidden?($=N,U=0):$=d>1&&U>1&&I<6?R:0;for(;i<e;i++)if(s[i]&&!s[i]._lazyRace)if(O)if((m=s[i].getAttribute("data-expand"))&&(f=1*m)||(f=$),A!==f&&(x=innerWidth+f*k,_=innerHeight+f,p=f*-1,A=f),a=s[i].getBoundingClientRect(),(B=a.bottom)>=p&&(L=a.top)<=_&&(M=a.right)>=p*k&&(P=a.left)<=x&&(B||M||P||L)&&(u&&I<3&&!m&&(d<3||U<4)||q(s[i],f))){if(Z(s[i]),l=!0,I>9)break}else!l&&u&&!o&&I<4&&U<4&&d>2&&(c[0]||n.preloadAfterLoad)&&(c[0]||!m&&(B||M||P||L||"auto"!=s[i].getAttribute(n.sizesAttr)))&&(o=c[0]||s[i]);else Z(s[i]);o&&!l&&Z(o)}},H=S(F),G=function(e){A(e.target,n.loadedClass),h(e.target,n.loadingClass),g(e.target,V)},Q=C(G),V=function(e){Q({target:e.target})},J=function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}},K=function(e){var t,r,i=e.getAttribute(n.srcsetAttr);(t=n.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),i&&e.setAttribute("srcset",i),t&&(r=e.parentNode,r.insertBefore(e.cloneNode(),e),r.removeChild(e))},X=C(function(e,t,r,i,s){var a,c,u,d,m,b;(m=v(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(r?A(e,n.autosizesClass):e.setAttribute("sizes",i)),c=e.getAttribute(n.srcsetAttr),a=e.getAttribute(n.srcAttr),s&&(u=e.parentNode,d=u&&l.test(u.nodeName||"")),b=t.firesLoad||"src"in e&&(c||a||d),m={target:e},b&&(g(e,j,!0),clearTimeout(f),f=o(j,2500),A(e,n.loadingClass),g(e,V,!0)),d&&p.call(u.getElementsByTagName("source"),K),c?e.setAttribute("srcset",c):a&&!d&&(D.test(e.nodeName)?J(e,a):e.src=a),(c||d)&&y(e,{src:a})),e._lazyRace&&delete e._lazyRace,h(e,n.lazyClass),z(function(){(!b||e.complete&&e.naturalWidth>1)&&(b?j(m):I--,G(m))},!0)}),Z=function(e){var t,r=W.test(e.nodeName),i=r&&(e.getAttribute(n.sizesAttr)||e.getAttribute("sizes")),s="auto"==i;(!s&&u||!r||!e.src&&!e.srcset||e.complete||m(e,n.errorClass))&&(t=v(e,"lazyunveilread").detail,s&&T.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,I++,X(e,t,s,i,r))},Y=function(){if(!u){if(i.now()-w<999)return void o(Y,999);var e=E(function(){n.loadMode=3,H()});u=!0,n.loadMode=3,H(),a("scroll",function(){3==n.loadMode&&(n.loadMode=2),e()},!0)}};return{_:function(){w=i.now(),s=t.getElementsByClassName(n.lazyClass),c=t.getElementsByClassName(n.lazyClass+" "+n.preloadClass),k=n.hFac,a("scroll",H,!0),a("resize",H,!0),e.MutationObserver?new MutationObserver(H).observe(r,{childList:!0,subtree:!0,attributes:!0}):(r.addEventListener("DOMNodeInserted",H,!0),r.addEventListener("DOMAttrModified",H,!0),setInterval(H,999)),a("hashchange",H,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t.addEventListener(e,H,!0)}),/d$|^c/.test(t.readyState)?Y():(a("load",Y),t.addEventListener("DOMContentLoaded",H),o(Y,2e4)),s.length?(F(),z._lsFlush()):H()},checkElems:H,unveil:Z}}(),T=function(){var e,r=C(function(e,t,n,r){var i,s,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),l.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),s=0,a=i.length;s<a;s++)i[s].setAttribute("sizes",r);n.detail.dataAttr||y(e,n.detail)}),i=function(e,t,n){var i,s=e.parentNode;s&&(n=w(e,s,n),i=v(e,"lazybeforesizes",{width:n,dataAttr:!!t}),i.defaultPrevented||(n=i.detail.width)&&n!==e._lazysizesWidth&&r(e,s,i,n))},s=function(){var t,n=e.length;if(n)for(t=0;t<n;t++)i(e[t])},o=E(s);return{_:function(){e=t.getElementsByClassName(n.autosizesClass),a("resize",o)},checkElems:o,updateElem:i}}(),_=function(){_.i||(_.i=!0,T._(),x._())};return function(){var t,r={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2};n=e.lazySizesConfig||e.lazysizesConfig||{};for(t in r)t in n||(n[t]=r[t]);e.lazySizesConfig=n,o(function(){n.init&&_()})}(),{cfg:n,autoSizer:T,loader:x,init:_,uP:y,aC:A,rC:h,hC:m,fire:v,gW:w,rAF:z}}}(t,t.document);t.lazySizes=r,"object"==typeof e&&e.exports&&(e.exports=r)}(window)},function(e,t,n){var r;!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,n=document.createElement("source"),r=function(e){var t,r,i=e.parentNode;"PICTURE"===i.nodeName.toUpperCase()?(t=n.cloneNode(),i.insertBefore(t,i.firstElementChild),setTimeout(function(){i.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},i=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},s=function(){clearTimeout(t),t=setTimeout(i,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),o=function(){s(),a&&a.addListener&&a.addListener(s)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),s}())}(window),function(i,s,a){"use strict";function o(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function c(){W=!1,$=i.devicePixelRatio,D={},O={},b.DPR=$||1,I.width=Math.max(i.innerWidth||0,T.clientWidth),I.height=Math.max(i.innerHeight||0,T.clientHeight),I.vw=I.width/100,I.vh=I.height/100,y=[I.height,I.width,$].join("-"),I.em=b.getEmValue(),I.rem=I.em}function u(e,t,n,r){var i,s,a,o;return"saveData"===L.algorithm?e>2.7?o=n+1:(s=t-n,i=Math.pow(e-.6,1.5),a=s*i,r&&(a+=.1*i),o=e+a):o=n>1?Math.sqrt(e*t):e,o>n}function l(e){var t,n=b.getSet(e),r=!1;"pending"!==n&&(r=y,n&&(t=b.setRes(n),b.applySetCandidate(t,e))),e[b.ns].evaled=r}function f(e,t){return e.res-t.res}function d(e,t,n){var r;return!n&&t&&(n=e[b.ns].sets,n=n&&n[n.length-1]),r=p(t,n),r&&(t=b.makeUrl(t),e[b.ns].curSrc=t,e[b.ns].curCan=r,r.res||Z(r,r.set.sizes)),r}function p(e,t){var n,r,i;if(e&&t)for(i=b.parseSet(t),e=b.makeUrl(e),n=0;n<i.length;n++)if(e===b.makeUrl(i[n].url)){r=i[n];break}return r}function m(e,t){var n,r,i,s,a=e.getElementsByTagName("source");for(n=0,r=a.length;n<r;n++)i=a[n],i[b.ns]=!0,(s=i.getAttribute("srcset"))&&t.push({srcset:s,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}function A(e,t){function n(t){var n,r=t.exec(e.substring(f));if(r)return n=r[0],f+=n.length,n}function r(){var e,n,r,a,o,c,u,l,f,p=!1,m={};for(a=0;a<s.length;a++)o=s[a],c=o[o.length-1],u=o.substring(0,o.length-1),l=parseInt(u,10),f=parseFloat(u),Q.test(u)&&"w"===c?((e||n)&&(p=!0),0===l?p=!0:e=l):V.test(u)&&"x"===c?((e||n||r)&&(p=!0),f<0?p=!0:n=f):Q.test(u)&&"h"===c?((r||n)&&(p=!0),0===l?p=!0:r=l):p=!0;p||(m.url=i,e&&(m.w=e),n&&(m.d=n),r&&(m.h=r),r||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,d.push(m))}for(var i,s,a,c,u,l=e.length,f=0,d=[];;){if(n(F),f>=l)return d;i=n(H),s=[],","===i.slice(-1)?(i=i.replace(G,""),r()):function(){for(n(q),a="",c="in descriptor";;){if(u=e.charAt(f),"in descriptor"===c)if(o(u))a&&(s.push(a),a="",c="after descriptor");else{if(","===u)return f+=1,a&&s.push(a),void r();if("("===u)a+=u,c="in parens";else{if(""===u)return a&&s.push(a),void r();a+=u}}else if("in parens"===c)if(")"===u)a+=u,c="in descriptor";else{if(""===u)return s.push(a),void r();a+=u}else if("after descriptor"===c)if(o(u));else{if(""===u)return void r();c="in descriptor",f-=1}f+=1}}()}}function h(e){var t,n,r,i,s,a,c=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,u=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(n=function(e){function t(){i&&(s.push(i),i="")}function n(){s[0]&&(a.push(s),s=[])}for(var r,i="",s=[],a=[],c=0,u=0,l=!1;;){if(""===(r=e.charAt(u)))return t(),n(),a;if(l){if("*"===r&&"/"===e[u+1]){l=!1,u+=2,t();continue}u+=1}else{if(o(r)){if(e.charAt(u-1)&&o(e.charAt(u-1))||!i){u+=1;continue}if(0===c){t(),u+=1;continue}r=" "}else if("("===r)c+=1;else if(")"===r)c-=1;else{if(","===r){t(),n(),u+=1;continue}if("/"===r&&"*"===e.charAt(u+1)){l=!0,u+=2;continue}}i+=r,u+=1}}}(e),r=n.length,t=0;t<r;t++)if(i=n[t],s=i[i.length-1],function(e){return!!(c.test(e)&&parseFloat(e)>=0)||(!!u.test(e)||("0"===e||"-0"===e||"+0"===e))}(s)){if(a=s,i.pop(),0===i.length)return a;if(i=i.join(" "),b.matchesMedia(i))return a}return"100vw"}s.createElement("picture");var g,v,y,b={},w=!1,z=function(){},C=s.createElement("img"),S=C.getAttribute,E=C.setAttribute,x=C.removeAttribute,T=s.documentElement,_={},L={algorithm:""},P=navigator.userAgent,M=/rident/.test(P)||/ecko/.test(P)&&P.match(/rv\:(\d+)/)&&RegExp.$1>35,B="currentSrc",R=/\s+\+?\d+(e\d+)?w/,N=i.picturefillCFG,k="font-size:100%!important;",W=!0,D={},O={},$=i.devicePixelRatio,I={px:1,in:96},U=s.createElement("a"),j=!1,q=/^[ \t\n\r\u000c]+/,F=/^[, \t\n\r\u000c]+/,H=/^[^ \t\n\r\u000c]+/,G=/[,]+$/,Q=/^\d+$/,V=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,J=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},K=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}},X=function(){var e=function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n},t=K(function(t){return"return "+e((t||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(e,n){var r;if(!(e in D))if(D[e]=!1,n&&(r=e.match(/^([\d\.]+)(em|vw|px)$/)))D[e]=r[1]*I[r[2]];else try{D[e]=new Function("e",t(e))(I)}catch(e){}return D[e]}}(),Z=function(e,t){return e.w?(e.cWidth=b.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},Y=function(e){if(w){var t,n,r,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),t=i.elements||b.qsa(i.context||s,i.reevaluate||i.reselect?b.sel:b.selShort),r=t.length){for(b.setupRun(i),j=!0,n=0;n<r;n++)b.fillImg(t[n],i);b.teardownRun(i)}}};i.console&&console.warn,B in C||(B="src"),_["image/jpeg"]=!0,_["image/gif"]=!0,_["image/png"]=!0,_["image/svg+xml"]=s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),b.ns=("pf"+(new Date).getTime()).substr(0,9),b.supSrcset="srcset"in C,b.supSizes="sizes"in C,b.supPicture=!!i.HTMLPictureElement,b.supSrcset&&b.supPicture&&!b.supSizes&&function(e){C.srcset="data:,a",e.src="data:,a",b.supSrcset=C.complete===e.complete,b.supPicture=b.supSrcset&&b.supPicture}(s.createElement("img")),b.supSrcset&&!b.supSizes?function(){var e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=s.createElement("img"),n=function(){2===t.width&&(b.supSizes=!0),v=b.supSrcset&&!b.supSizes,w=!0,setTimeout(Y)};t.onload=n,t.onerror=n,t.setAttribute("sizes","9px"),t.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",t.src=e}():w=!0,b.selShort="picture>img,img[srcset]",b.sel=b.selShort,b.cfg=L,b.DPR=$||1,b.u=I,b.types=_,b.setSize=z,b.makeUrl=K(function(e){return U.href=e,U.href}),b.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},b.matchesMedia=function(){return i.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?b.matchesMedia=function(e){return!e||matchMedia(e).matches}:b.matchesMedia=b.mMQ,b.matchesMedia.apply(this,arguments)},b.mMQ=function(e){return!e||X(e)},b.calcLength=function(e){var t=X(e,!0)||!1;return t<0&&(t=!1),t},b.supportsType=function(e){return!e||_[e]},b.parseSize=K(function(e){var t=(e||"").match(/(\([^)]+\))?\s*(.+)/);return{media:t&&t[1],length:t&&t[2]}}),b.parseSet=function(e){return e.cands||(e.cands=A(e.srcset,e)),e.cands},b.getEmValue=function(){var e;if(!g&&(e=s.body)){var t=s.createElement("div"),n=T.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",T.style.cssText=k,e.style.cssText=k,e.appendChild(t),g=t.offsetWidth,e.removeChild(t),g=parseFloat(g,10),T.style.cssText=n,e.style.cssText=r}return g||16},b.calcListLength=function(e){if(!(e in O)||L.uT){var t=b.calcLength(h(e));O[e]=t||I.width}return O[e]},b.setRes=function(e){var t;if(e){t=b.parseSet(e);for(var n=0,r=t.length;n<r;n++)Z(t[n],e.sizes)}return t},b.setRes.res=Z,b.applySetCandidate=function(e,t){if(e.length){var n,r,i,s,a,o,c,l,p,m=t[b.ns],A=b.DPR;if(o=m.curSrc||t[B],c=m.curCan||d(t,o,e[0].set),c&&c.set===e[0].set&&((p=M&&!t.complete&&c.res-.1>A)||(c.cached=!0,c.res>=A&&(a=c))),!a)for(e.sort(f),s=e.length,a=e[s-1],r=0;r<s;r++)if(n=e[r],n.res>=A){i=r-1,a=e[i]&&(p||o!==b.makeUrl(n.url))&&u(e[i].res,n.res,A,e[i].cached)?e[i]:n;break}a&&(l=b.makeUrl(a.url),m.curSrc=l,m.curCan=a,l!==o&&b.setSrc(t,a),b.setSize(t))}},b.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},b.getSet=function(e){var t,n,r,i=!1,s=e[b.ns].sets;for(t=0;t<s.length&&!i;t++)if(n=s[t],n.srcset&&b.matchesMedia(n.media)&&(r=b.supportsType(n.type))){"pending"===r&&(n=r),i=n;break}return i},b.parseSets=function(e,t,n){var r,i,s,a,o=t&&"PICTURE"===t.nodeName.toUpperCase(),c=e[b.ns];(void 0===c.src||n.src)&&(c.src=S.call(e,"src"),c.src?E.call(e,"data-pfsrc",c.src):x.call(e,"data-pfsrc")),(void 0===c.srcset||n.srcset||!b.supSrcset||e.srcset)&&(r=S.call(e,"srcset"),c.srcset=r,a=!0),c.sets=[],o&&(c.pic=!0,m(t,c.sets)),c.srcset?(i={srcset:c.srcset,sizes:S.call(e,"sizes")},c.sets.push(i),(s=(v||c.src)&&R.test(c.srcset||""))||!c.src||p(c.src,i)||i.has1x||(i.srcset+=", "+c.src,i.cands.push({url:c.src,d:1,set:i}))):c.src&&c.sets.push({srcset:c.src,sizes:null}),c.curCan=null,c.curSrc=void 0,c.supported=!(o||i&&!b.supSrcset||s&&!b.supSizes),a&&b.supSrcset&&!c.supported&&(r?(E.call(e,"data-pfsrcset",r),e.srcset=""):x.call(e,"data-pfsrcset")),c.supported&&!c.srcset&&(!c.src&&e.src||e.src!==b.makeUrl(c.src))&&(null===c.src?e.removeAttribute("src"):e.src=c.src),c.parsed=!0},b.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[b.ns]||(e[b.ns]={}),n=e[b.ns],(r||n.evaled!==y)&&(n.parsed&&!t.reevaluate||b.parseSets(e,e.parentNode,t),n.supported?n.evaled=y:l(e))},b.setupRun=function(){j&&!W&&$===i.devicePixelRatio||c()},b.supPicture?(Y=z,b.fillImg=z):function(){var e,t=i.attachEvent?/d$|^c/:/d$|^c|^i/,n=function(){var i=s.readyState||"";r=setTimeout(n,"loading"===i?200:999),s.body&&(b.fillImgs(),(e=e||t.test(i))&&clearTimeout(r))},r=setTimeout(n,s.body?9:99),a=T.clientHeight,o=function(){W=Math.max(i.innerWidth||0,T.clientWidth)!==I.width||T.clientHeight!==a,a=T.clientHeight,W&&b.fillImgs()};J(i,"resize",function(e,t){var n,r,i=function(){var s=new Date-r;s<t?n=setTimeout(i,t-s):(n=null,e())};return function(){r=new Date,n||(n=setTimeout(i,t))}}(o,99)),J(s,"readystatechange",n)}(),b.picturefill=Y,b.fillImgs=Y,b.teardownRun=z,Y._=b,i.picturefillCFG={pf:b,push:function(e){var t=e.shift();"function"==typeof b[t]?b[t].apply(b,e):(L[t]=e[0],j&&b.fillImgs({reselect:!0}))}};for(;N&&N.length;)i.picturefillCFG.push(N.shift());i.picturefill=Y,"object"==typeof e&&"object"==typeof e.exports?e.exports=Y:void 0!==(r=function(){return Y}.call(t,n,t,e))&&(e.exports=r),b.supPicture||(_["image/webp"]=function(e,t){var n=new i.Image;return n.onerror=function(){_[e]=!1,Y()},n.onload=function(){_[e]=1===n.width,Y()},n.src=t,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document)},,function(e,t,n){"use strict";n(7),n(9),n(8)}]);