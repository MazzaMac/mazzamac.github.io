(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/DhJ":function(e,t){e.exports=[{name:"poetry",url:"/writing/",links:[{title:"Collection (TBA 2025)",url:"https://mariannemacrae.co.uk/collection"},{title:"Joseph Lister is My New Flatmate (2018)",url:"/joseph-lister-is-my-new-flatmate"}]},{name:"academic",url:"/writing",links:[{title:"Beyond the Other (PhD)",url:"https://era.ed.ac.uk/bitstream/handle/1842/33081/MacRae2018.pdf?sequence=1"},{title:"Animals in Marianne Moore",url:"https://www.cambridge.org/core/books/abs/elizabeth-bishop-in-context/animals/B52332653FBC37C1472862686D8D1120"}]},{name:"blogs",url:"/blogs",links:[{title:"Mocha The Week",url:"https://mochatheweek.co.uk"},{title:"Archive",url:"/archive"}]},{name:"about",url:"/about"},{name:"socials",links:[{title:"instagram",url:"https://www.instagram.com/mmmmarianne14",site:"instagram"},{title:"twitter",url:"https://x.com/MarianneMacRae",site:"twitter"}]}]},"8oxB":function(e,t){var n,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var s,l=[],u=!1,m=-1;function f(){u&&s&&(u=!1,s.length?l=s.concat(l):m=-1,l.length&&d())}function d(){if(!u){var e=c(f);u=!0;for(var t=l.length;t;){for(s=l,l=[];++m<t;)s&&s[m].run();m=-1,t=l.length}s=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||u||c(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},"8ujH":function(e,t,n){var r=n("GTTd")("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var i,c,s=t.prefix||"__jp",l=t.name||s+a++,u=t.param||"callback",m=null!=t.timeout?t.timeout:6e4,f=encodeURIComponent,d=document.getElementsByTagName("script")[0]||document.head;m&&(c=setTimeout((function(){p(),n&&n(new Error("Timeout"))}),m));function p(){i.parentNode&&i.parentNode.removeChild(i),window[l]=o,c&&clearTimeout(c)}return window[l]=function(e){r("jsonp got",e),p(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+u+"="+f(l)).replace("?&","?"),r('jsonp req "%s"',e),(i=document.createElement("script")).src=e,d.parentNode.insertBefore(i,d),function(){window[l]&&p()}};var a=0;function o(){}},"8ypT":function(e,t,n){},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Wbzz");function i(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("span",{className:"start"},"M",a.a.createElement("div",{className:"a-adjust "},"a"),"ri",a.a.createElement("div",{className:"a-adjust "},"a"),"nne"),a.a.createElement("span",{className:"end"},"M",a.a.createElement("div",{className:"a-adjust "},"a"),"cR",a.a.createElement("div",{className:"a-adjust "},"a"),"e"))}function c(e){let{currentPath:t,layout:n}=e;function r(e){return t.toString().includes(e)}return a.a.createElement("nav",{style:{margin:"0px auto",marginBottom:"1rem",display:"flex",flexDirection:"column",width:"100%",maxWidth:"960px",alignItems:"flex-start",fontSize:"1.4rem",lineHeight:"1.8rem",fontFamily:"Forum"}},a.a.createElement("li",{className:r("blog")?"current":""},a.a.createElement(o.Link,{to:"/blog"},"Blog")),a.a.createElement("li",{className:r("writing")?"current":""},a.a.createElement(o.Link,{to:"/writing"},"Writing")),a.a.createElement("li",{className:r("art")?"current":""},a.a.createElement(o.Link,{to:"/art"},"Art")),a.a.createElement("li",{className:r("about")?"current":""},a.a.createElement(o.Link,{to:"/about"},"About")),a.a.createElement("li",{className:r("contact")?"current":""},a.a.createElement(o.Link,{to:"/contact"},"Contact")),"single"!==n&&a.a.createElement("li",{style:{fontSize:"1.65rem",display:"flex",flexWrap:"nowrap",flexDirection:"column",alignItems:"center",textTransform:"lowercase",fontFamily:"IM Fell Great Primer",fontWeight:400,color:"#41b3c2 !important"}},a.a.createElement(o.Link,{to:"/",id:"nav-logo"},a.a.createElement(i,null))))}function s(e){let{currentPath:t,children:n,layout:r}=e;return a.a.createElement(a.a.Fragment,null,a.a.createElement("aside",{id:"sidebar",className:"sticky",style:{flex:1,paddingLeft:20}},a.a.createElement(c,{currentPath:!0,layout:r})))}var l=n("/DhJ"),u=n.n(l),m=n("8ujH"),f=n.n(m),d=n("L+h+"),p=n.n(d),h=function(e){var t=e.status,n=e.message,r=e.className,o=e.style,i=e.onSubmitted,c=void 0;return a.a.createElement("div",{className:r,style:o},"sending"===t&&a.a.createElement("div",{style:{color:"blue"}},"sending..."),"error"===t&&a.a.createElement("div",{style:{color:"red"},dangerouslySetInnerHTML:{__html:n}}),"success"===t&&a.a.createElement("div",{style:{color:"green"},dangerouslySetInnerHTML:{__html:n}}),a.a.createElement("input",{ref:function(e){return c=e},type:"email",placeholder:"Your email"}),a.a.createElement("button",{onClick:function(){return c&&c.value.indexOf("@")>-1&&i({EMAIL:c.value})}},"Submit"))};function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var b=function(e){return e.replace("/post?","/post-json?")},w=function(e){function t(){var n,r;g(this,t);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return n=r=y(this,e.call.apply(e,[this].concat(o))),r.state={status:null,message:null},r.subscribe=function(e){var t=p()(e),n=b(r.props.url)+"&"+t;r.setState({status:"sending",message:null},(function(){return f()(n,{param:"c"},(function(e,t){e?r.setState({status:"error",message:e}):"success"!==t.result?r.setState({status:"error",message:t.msg}):r.setState({status:"success",message:t.msg})}))}))},y(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return this.props.render({subscribe:this.subscribe,status:this.state.status,message:this.state.message})},t}(a.a.Component);w.propTypes={},w.defaultProps={render:function(e){var t=e.subscribe,n=e.status,r=e.message;return a.a.createElement(h,{status:n,message:r,onSubmitted:function(e){return t(e)}})}};var v=w;function E(e){let{url:t}=e;return a.a.createElement(v,{url:t})}function k(e){let{url:t,text:n,name:r,link_index:o}=e;return a.a.createElement("li",null,a.a.createElement("a",{className:"no-decoration text-white",key:`${r}-link-${o}`,href:t},n))}function x(e){let{name:t,links:n,index:r}=e;return a.a.createElement("section",{id:"footer_"+t,key:"footer_section_unique_"+r,className:"mb-2 links"},a.a.createElement("h5",null,t),a.a.createElement("ul",null,n&&n.map((e,n)=>a.a.createElement(k,{key:"footer-section-link-"+n,url:e.url,section:t,link_index:n,text:e.title}))))}function T(){return a.a.createElement("footer",{id:"footer",className:"bg-black text-white"},a.a.createElement("div",{id:"outer",key:"footer-outer",className:"flex"},a.a.createElement("div",{id:"inner",key:"footer-inner",className:"mb-2"},u.a.map((e,t)=>a.a.createElement(x,{key:"footer-section-"+t,index:t,name:e.name,links:e.links}))),a.a.createElement(E,{url:"//games.us11.list-manage.com/subscribe/post?u=f1faddaafa756755d023657f1&amp;id=686a9e9f6c&amp;f_id=00e19ce0f0"})),a.a.createElement("section",{id:"made-by"},"© ",(new Date).getFullYear(),", Built by ",a.a.createElement("a",{href:"https://dchitch092.github.io/"},"Richard Hanrahan")," using "," ",a.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))}function N(e){let{siteTitle:t,currentPath:n,layout:r,device:c}=e;return a.a.createElement(a.a.Fragment,null,a.a.createElement("header",{className:r,style:{gridArea:"header",width:"100%"}},a.a.createElement(o.Link,{to:"/",style:{textDecoration:"none"}},a.a.createElement("div",{id:"logo"},a.a.createElement("h1",{className:r,id:"title",style:{textTransform:"lowercase"}},a.a.createElement(i,null))))))}N.defaultProps={siteTitle:""};n("8ypT");t.a=e=>{let{children:t,currentPath:n,layout:r}=e;return a.a.createElement("div",{id:"grid-container"},a.a.createElement(N,{layout:r}),a.a.createElement("main",{id:"content"},a.a.createElement("div",{style:{margin:"0px auto",marginTop:"2rem",padding:"0px 0 1.45rem 0"}},t)),a.a.createElement(s,{currentPath:n,layout:r}),a.a.createElement(T,null))}},GTTd:function(e,t,n){(function(r){function a(){var e;try{e=t.storage.debug}catch(n){}return!e&&void 0!==r&&"env"in r&&(e={}.DEBUG),e}(t=e.exports=n("bRoh")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var a=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(a++,"%c"===e&&(o=a))})),e.splice(o,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=a,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(a())}).call(this,n("8oxB"))},"L+h+":function(e,t,n){e.exports=(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}e.r(t),e.d(t,{default:()=>c});var r=encodeURIComponent;function a(e,t,a,o,c){var s=o&&c.arrayPrefix||"";if("object"===n(t)){var l="".concat(e).concat(s).concat(a&&"]","[");return"".concat(i(t,"".concat(a).concat(l),c))}return a&&a.length?"".concat(a).concat(e,"]").concat(s,"=").concat(r(t)):"".concat(e).concat(s,"=").concat(r(t))}function o(e,t,n,r){return t.map((function(t){return a(e,t,n,!0,r)})).join("&")}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(Array.isArray(e)?e.map((function(e,r){return a("".concat(r),e,t,!0,n)})):Object.keys(e).filter((function(t){return void 0!==e[t]})).map((function(r){return e[r]&&Array.isArray(e[r])?o("".concat(r),e[r],t,n):a(r,e[r],t,!1,n)}))).join("&").replace(/%20/g,"+")}const c=i;return t})()},QXP7:function(e,t){var n=1e3,r=6e4,a=60*r,o=24*a;function i(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var c,s=typeof e;if("string"===s&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var i=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*i;case"days":case"day":case"d":return i*o;case"hours":case"hour":case"hrs":case"hr":case"h":return i*a;case"minutes":case"minute":case"mins":case"min":case"m":return i*r;case"seconds":case"second":case"secs":case"sec":case"s":return i*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===s&&!1===isNaN(e))return t.long?i(c=e,o,"day")||i(c,a,"hour")||i(c,r,"minute")||i(c,n,"second")||c+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=a)return Math.round(e/a)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},bRoh:function(e,t,n){var r;function a(e){function n(){if(n.enabled){var e=n,a=+new Date,o=a-(r||a);e.diff=o,e.prev=r,e.curr=a,r=a;for(var i=new Array(arguments.length),c=0;c<i.length;c++)i[c]=arguments[c];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var s=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;s++;var a=t.formatters[r];if("function"==typeof a){var o=i[s];n=a.call(e,o),i.splice(s,1),s--}return n})),t.formatArgs.call(e,i);var l=n.log||t.log||console.log.bind(console);l.apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=a.debug=a.default=a).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,a=0;a<r;a++)n[a]&&("-"===(e=n[a].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n("QXP7"),t.names=[],t.skips=[],t.formatters={}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-2924edbb08852d1c7d46.js.map