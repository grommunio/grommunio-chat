var boards;(()=>{"use strict";var e,r,t,a,o,n,i,l,u,d,f,s,c,p,h,v,b={90494:(e,r,t)=>{var a={".":()=>Promise.all([t.e(774),t.e(57),t.e(59)]).then((()=>()=>t(60623))),"./manifest":()=>t.e(811).then((()=>()=>t(80059)))},o=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),n=(e,r)=>{if(t.S){var a="default",o=t.S[a];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>o,init:()=>n})}},m={};function g(e){var r=m[e];if(void 0!==r)return r.exports;var t=m[e]={id:e,loaded:!1,exports:{}};return b[e].call(t.exports,t,t.exports,g),t.loaded=!0,t.exports}g.m=b,g.c=m,g.amdO={},g.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return g.d(r,{a:r}),r},g.d=(e,r)=>{for(var t in r)g.o(r,t)&&!g.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},g.f={},g.e=e=>Promise.all(Object.keys(g.f).reduce(((r,t)=>(g.f[t](e,r),r)),[])),g.u=e=>e+"."+{57:"79dfe10867a1b8055d12",59:"782b5512dea51751f3f8",126:"783f1ddbcd27fed16be4",626:"b5134cadf86fa6084dc4",697:"6be3ce9d4d982063d737",774:"d35a0cfd42b110b55aba",811:"f3bd3dd58a55d0dfbaa5"}[e]+".js",g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),g.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="focalboard:",g.l=(t,a,o,n)=>{if(e[t])e[t].push(a);else{var i,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var f=u[d];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+o){i=f;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,g.nc&&i.setAttribute("nonce",g.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[a];var s=(r,a)=>{i.onerror=i.onload=null,clearTimeout(c);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(a))),r)return r(a)},c=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),l&&document.head.appendChild(i)}},g.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},g.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{g.S={};var e={},r={};g.I=(t,a)=>{a||(a=[]);var o=r[t];if(o||(o=r[t]={}),!(a.indexOf(o)>=0)){if(a.push(o),e[t])return e[t];g.o(g.S,t)||(g.S[t]={});var n=g.S[t],i="focalboard",l=[];return"default"===t&&((e,r,t,a)=>{var o=n[e]=n[e]||{},l=o[r];(!l||!l.loaded&&(1!=!l.eager?a:i>l.from))&&(o[r]={get:()=>g.e(697).then((()=>()=>g(45697))),from:i,eager:!1})})("prop-types","15.8.1"),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),(()=>{var e;g.g.importScripts&&(e=g.g.location+"");var r=g.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var o=e[a],n=(typeof o)[0];if(a>=r.length)return"u"==n;var i=r[a],l=(typeof i)[0];if(n!=l)return"o"==n&&"n"==l||"s"==l||"u"==n;if("o"!=n&&"u"!=n&&o!=i)return o<i;a++}},o=(e,r)=>{if(0 in e){r=t(r);var a=e[0],n=a<0;n&&(a=-a-1);for(var i=0,l=1,u=!0;;l++,i++){var d,f,s=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(f=(typeof(d=r[i]))[0]))return!u||("u"==s?l>a&&!n:""==s!=n);if("u"==f){if(!u||"u"!=s)return!1}else if(u)if(s==f)if(l<=a){if(d!=e[l])return!1}else{if(n?d>e[l]:d<e[l])return!1;d!=e[l]&&(u=!1)}else if("s"!=s&&"n"!=s){if(n||l<=a)return!1;u=!1,l--}else{if(l<=a||f<s!=n)return!1;u=!1}else"s"!=s&&"n"!=s&&(u=!1,l--)}}var c=[],p=c.pop.bind(c);for(i=1;i<e.length;i++){var h=e[i];c.push(1==h?p()|p():2==h?p()&p():h?o(h,r):!p())}return!!p()},n=(e,r)=>{var t=g.S[e];if(!t||!g.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},l=(e,r,t,a)=>{var o=i(e,t);return d(e[t][o])},u=(e,r,t)=>{var n=e[r];return(r=Object.keys(n).reduce(((e,r)=>!o(t,r)||e&&!a(e,r)?e:r),0))&&n[r]},d=e=>(e.loaded=1,e.get()),s=(f=e=>function(r,t,a,o){var n=g.I(r);return n&&n.then?n.then(e.bind(e,r,g.S[r],t,a,o)):e(r,g.S[r],t,a,o)})(((e,r,t)=>(n(e,t),l(r,0,t)))),c=f(((e,r,t,a,o)=>{var n=r&&g.o(r,t)&&u(r,t,a);return n?d(n):o()})),p={},h={1094:()=>s("default","react-dom"),1568:()=>s("default","react-redux"),71005:()=>s("default","react"),76735:()=>s("default","react-intl"),76995:()=>c("default","prop-types",[1,15],(()=>g.e(697).then((()=>()=>g(45697))))),83889:()=>c("default","prop-types",[1,15,6,0],(()=>g.e(697).then((()=>()=>g(45697))))),98142:()=>s("default","react-router-dom"),5439:()=>c("default","prop-types",[1,15,8,1],(()=>g.e(697).then((()=>()=>g(45697))))),44122:()=>c("default","prop-types",[1,15,5,10],(()=>g.e(697).then((()=>()=>g(45697)))))},v={57:[1094,1568,71005,76735,76995,83889,98142],626:[5439,44122]},g.f.consumes=(e,r)=>{g.o(v,e)&&v[e].forEach((e=>{if(g.o(p,e))return r.push(p[e]);var t=r=>{p[e]=0,g.m[e]=t=>{delete g.c[e],t.exports=r()}},a=r=>{delete p[e],g.m[e]=t=>{throw delete g.c[e],r}};try{var o=h[e]();o.then?r.push(p[e]=o.then(t).catch(a)):t(o)}catch(e){a(e)}}))},(()=>{g.b=document.baseURI||self.location.href;var e={801:0};g.f.j=(r,t)=>{var a=g.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else{var o=new Promise(((t,o)=>a=e[r]=[t,o]));t.push(a[2]=o);var n=g.p+g.u(r),i=new Error;g.l(n,(t=>{if(g.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+n+")",i.name="ChunkLoadError",i.type=o,i.request=n,a[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,o,[n,i,l]=t,u=0;if(n.some((r=>0!==e[r]))){for(a in i)g.o(i,a)&&(g.m[a]=i[a]);l&&l(g)}for(r&&r(t);u<n.length;u++)o=n[u],g.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkfocalboard=self.webpackChunkfocalboard||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var y=g(90494);boards=y})();