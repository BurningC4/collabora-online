!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=190)}([,,,function(t,n,e){var r=e(6),o=e(19),i=e(16),c=e(20),u=e(23),a=function t(n,e,a){var s,f,l,p,v=n&t.F,d=n&t.G,h=n&t.P,m=n&t.B,y=d?r:n&t.S?r[e]||(r[e]={}):(r[e]||{}).prototype,g=d?o:o[e]||(o[e]={}),_=g.prototype||(g.prototype={});for(s in d&&(a=e),a)l=((f=!v&&y&&void 0!==y[s])?y:a)[s],p=m&&f?u(l,r):h&&"function"==typeof l?u(Function.call,l):l,y&&c(y,s,l,n&t.U),g[s]!=l&&i(g,s,p),h&&_[s]!=l&&(_[s]=l)};r.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=n.ERR_CONNECTION_DESTROYED="ConnectionDestroyed",o=n.ERR_CONNECTION_TIMEOUT="ConnectionTimeout",i=n.ERR_NOT_IN_IFRAME="NotInIframe",c={"http:":"80","https:":"443"},u=/^(https?:)?\/\/([^\/:]+)(:(\d+))?/,a={ERR_CONNECTION_DESTROYED:r,ERR_CONNECTION_TIMEOUT:o,ERR_NOT_IN_IFRAME:i,Promise:function(){try{return window?window.Promise:null}catch(t){return null}}(),debug:!1},s=function(){var t=0;return function(){return++t}}(),f=function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];var r;a.debug&&(r=console).log.apply(r,["[Penpal]"].concat(n))},l=function(t){var n=[];return t(function(){n.forEach(function(t){t()})}),{then:function(t){n.push(t)}}},p=function(t){return{name:t.name,message:t.message,stack:t.stack}},v=function(t,n,e,o){var i=n.localName,c=n.local,u=n.remote,l=n.remoteOrigin,p=!1;f(i+": Connecting call sender");var v=function(t){return function(){for(var n=arguments.length,e=Array(n),o=0;o<n;o++)e[o]=arguments[o];if(f(i+": Sending "+t+"() call"),p){var v=new Error("Unable to send "+t+"() call due to destroyed connection");throw v.code=r,v}return new a.Promise(function(n,r){var o=s();c.addEventListener("message",function e(a){if(a.source===u&&a.origin===l&&"reply"===a.data.penpal&&a.data.id===o){f(i+": Received "+t+"() reply"),c.removeEventListener("message",e);var s=a.data.returnValue;a.data.returnValueIsError&&(s=function(t){var n=new Error;return Object.keys(t).forEach(function(e){return n[e]=t[e]}),n}(s)),("fulfilled"===a.data.resolution?n:r)(s)}}),u.postMessage({penpal:"call",id:o,methodName:t,args:e},l)})}};o.then(function(){p=!0}),e.reduce(function(t,n){return t[n]=v(n),t},t)},d=function(t,n,e){var r=t.localName,o=t.local,i=t.remote,c=t.remoteOrigin,u=!1;f(r+": Connecting call receiver");var s=function(t){if(t.source===i&&t.origin===c&&"call"===t.data.penpal){var e=t.data,o=e.methodName,s=e.args,l=e.id;if(f(r+": Received "+o+"() call"),o in n){var v=function(t){return function(n){if(f(r+": Sending "+o+"() reply"),u)f(r+": Unable to send "+o+"() reply due to destroyed connection");else{var e={penpal:"reply",id:l,resolution:t,returnValue:n};"rejected"===t&&n instanceof Error&&(e.returnValue=p(n),e.returnValueIsError=!0);try{i.postMessage(e,c)}catch(t){throw"DataCloneError"===t.name&&i.postMessage({penpal:"reply",id:l,resolution:"rejected",returnValue:p(t),returnValueIsError:!0},c),t}}}};new a.Promise(function(t){return t(n[o].apply(n,s))}).then(v("fulfilled"),v("rejected"))}}};o.addEventListener("message",s),e.then(function(){u=!0,o.removeEventListener("message",s)})};a.connectToChild=function(t){var n=t.url,e=t.appendTo,i=t.methods,s=void 0===i?{}:i,p=t.timeout,h=void 0,m=new l(function(t){h=t}),y=window,g=document.createElement("iframe");(e||document.body).appendChild(g),m.then(function(){g.parentNode&&g.parentNode.removeChild(g)});var _=g.contentWindow||g.contentDocument.parentWindow,w=function(t){var n=document.location,e=u.exec(t),r=void 0,o=void 0,i=void 0;return e?(r=e[1]?e[1]:n.protocol,o=e[2],i=e[4]):(r=n.protocol,o=n.hostname,i=n.port),r+"//"+o+(i&&i!==c[r]?":"+i:"")}(n);return{promise:new a.Promise(function(t,e){var i=void 0;void 0!==p&&(i=setTimeout(function(){var t=new Error("Connection to child timed out after "+p+"ms");t.code=o,e(t),h()},p));var c={},u=void 0,a=void 0,x=function(n){if(n.source===_&&n.origin===w&&"handshake"===n.data.penpal){f("Parent: Received handshake, sending reply"),n.source.postMessage({penpal:"handshake-reply",methodNames:Object.keys(s)},n.origin);var e={localName:"Parent",local:y,remote:_,remoteOrigin:n.origin};a&&a();var r=new l(function(t){m.then(t),a=t});d(e,s,r),u&&u.forEach(function(t){delete c[t]}),u=n.data.methodNames,v(c,e,u,m),clearTimeout(i),t(c)}};y.addEventListener("message",x),m.then(function(){y.removeEventListener("message",x);var t=new Error("Connection destroyed");t.code=r,e(t)}),f("Parent: Loading iframe"),g.src=n}),iframe:g,destroy:h}},a.connectToParent=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.parentOrigin,e=void 0===n?"*":n,c=t.methods,u=void 0===c?{}:c,s=t.timeout;if(window===window.top){var p=new Error("connectToParent() must be called within an iframe");throw p.code=i,p}var h=void 0,m=new l(function(t){h=t}),y=window,g=y.parent;return{promise:new a.Promise(function(t,n){var i=void 0;void 0!==s&&(i=setTimeout(function(){var t=new Error("Connection to parent timed out after "+s+"ms");t.code=o,n(t),h()},s));var c=function n(r){if(("*"===e||e===r.origin)&&r.source===g&&"handshake-reply"===r.data.penpal){f("Child: Received handshake reply"),y.removeEventListener("message",n);var o={localName:"Child",local:y,remote:g,remoteOrigin:r.origin},c={};d(o,u,m),v(c,o,r.data.methodNames,m),clearTimeout(i),t(c)}};y.addEventListener("message",c),m.then(function(){y.removeEventListener("message",c);var t=new Error("Connection destroyed");t.code=r,n(t)}),f("Child: Sending handshake"),g.postMessage({penpal:"handshake",methodNames:Object.keys(u)},e)}),destroy:h}},n.default=a},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(9);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(59)("wks"),o=e(36),i=e(6).Symbol,c="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=r},function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(t){return"object"===e(t)?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},,function(t,n,e){t.exports=!e(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(7),o=e(97),i=e(31),c=Object.defineProperty;n.f=e(12)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(26),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},,function(t,n,e){var r=e(13),o=e(40);t.exports=e(12)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(27);t.exports=function(t){return Object(r(t))}},function(t,n){var e=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(6),o=e(16),i=e(21),c=e(36)("src"),u=Function.toString,a=(""+u).split("toString");e(19).inspectSource=function(t){return u.call(t)},(t.exports=function(t,n,e,u){var s="function"==typeof e;s&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(s&&(i(e,c)||o(e,c,t[n]?""+t[n]:a.join(String(n)))),t===r?t[n]=e:u?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[c]||u.call(this)})},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(17);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(61),o=e(27);t.exports=function(t){return r(o(t))}},,function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(21),o=e(18),i=e(62)("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},,function(t,n){t.exports=!1},function(t,n,e){var r=e(9);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports={}},,,,function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},,,,function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(99),o=e(72);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(13).f,o=e(21),i=e(8)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(8)("unscopables"),o=Array.prototype;void 0==o[r]&&e(16)(o,r,{}),t.exports=function(t){o[r][t]=!0}},,,function(t,n,e){var r=e(22),o=e(8)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n,e){var r=e(7),o=e(98),i=e(72),c=e(62)("IE_PROTO"),u=function(){},a=function(){var t,n=e(60)("iframe"),r=i.length;for(n.style.display="none",e(73).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(u.prototype=r(t),e=new u,u.prototype=null,e[c]=t):e=a(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(26),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(23),o=e(101),i=e(86),c=e(7),u=e(14),a=e(87),s={},f={};(n=t.exports=function(t,n,e,l,p){var v,d,h,m,y=p?function(){return t}:a(t),g=r(e,l,n?2:1),_=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(i(y)){for(v=u(t.length);v>_;_++)if((m=n?g(c(d=t[_])[0],d[1]):g(t[_]))===s||m===f)return m}else for(h=y.call(t);!(d=h.next()).done;)if((m=o(h,g,d.value,n))===s||m===f)return m}).BREAK=s,n.RETURN=f},function(t,n,e){var r=e(20);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n,e){"use strict";var r=e(6),o=e(13),i=e(12),c=e(8)("species");t.exports=function(t){var n=r[t];i&&n&&!n[c]&&o.f(n,c,{configurable:!0,get:function(){return this}})}},,,,,,,function(t,n,e){var r=e(19),o=e(6),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(30)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(9),o=e(6).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(22);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(59)("keys"),o=e(36);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(7),o=e(17),i=e(8)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||void 0==(e=r(c)[i])?n:o(e)}},function(t,n,e){"use strict";var r=e(17);t.exports.f=function(t){return new function(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=r(n),this.reject=r(e)}(t)}},,,,,,function(t,n,e){"use strict";var r=e(30),o=e(3),i=e(20),c=e(16),u=e(32),a=e(84),s=e(42),f=e(28),l=e(8)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,e,d,h,m,y){a(e,n,d);var g,_,w,x=function(t){if(!p&&t in S)return S[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},b=n+" Iterator",O="values"==h,E=!1,S=t.prototype,P=S[l]||S["@@iterator"]||h&&S[h],T=P||x(h),j=h?O?x("entries"):T:void 0,L="Array"==n&&S.entries||P;if(L&&(w=f(L.call(new t)))!==Object.prototype&&w.next&&(s(w,b,!0),r||"function"==typeof w[l]||c(w,l,v)),O&&P&&"values"!==P.name&&(E=!0,T=function(){return P.call(this)}),r&&!y||!p&&!E&&S[l]||c(S,l,T),u[n]=T,u[b]=v,h)if(g={values:O?T:x("values"),keys:m?T:x("keys"),entries:j},y)for(_ in g)_ in S||i(S,_,g[_]);else o(o.P+o.F*(p||E),n,g);return g}},function(t,n,e){var r=e(24),o=e(14),i=e(48);t.exports=function(t){return function(n,e,c){var u,a=r(n),s=o(a.length),f=i(c,s);if(t&&e!=e){for(;s>f;)if((u=a[f++])!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(6).document;t.exports=r&&r.documentElement},function(t,n,e){var r,o,i,c=e(23),u=e(102),a=e(73),s=e(60),f=e(6),l=f.process,p=f.setImmediate,v=f.clearImmediate,d=f.MessageChannel,h=f.Dispatch,m=0,y={},g=function(){var t=+this;if(y.hasOwnProperty(t)){var n=y[t];delete y[t],n()}},_=function(t){g.call(t.data)};p&&v||(p=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return y[++m]=function(){u("function"==typeof t?t:Function(t),n)},r(m),m},v=function(t){delete y[t]},"process"==e(22)(l)?r=function(t){l.nextTick(c(g,t,1))}:h&&h.now?r=function(t){h.now(c(g,t,1))}:d?(i=(o=new d).port2,o.port1.onmessage=_,r=c(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",_,!1)):r="onreadystatechange"in s("script")?function(t){a.appendChild(s("script")).onreadystatechange=function(){a.removeChild(this),g.call(t)}}:function(t){setTimeout(c(g,t,1),0)}),t.exports={set:p,clear:v}},function(t,n,e){var r=e(6).navigator;t.exports=r&&r.userAgent||""},function(t,n,e){var r=e(8)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],c=i[r]();c.next=function(){return{done:e=!0}},i[r]=function(){return c},t(i)}catch(t){}return e}},,,,,,,function(t,n,e){var r=e(26),o=e(27);t.exports=function(t){return function(n,e){var i,c,u=String(o(n)),a=r(e),s=u.length;return a<0||a>=s?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===s||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}}},function(t,n,e){"use strict";var r=e(47),o=e(40),i=e(42),c={};e(16)(c,e(8)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(c,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){"use strict";var r=e(43),o=e(100),i=e(32),c=e(24);t.exports=e(70)(Array,"Array",function(t,n){this._t=c(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n,e){var r=e(32),o=e(8)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){var r=e(46),o=e(8)("iterator"),i=e(32);t.exports=e(19).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){var r=e(6),o=e(74).set,i=r.MutationObserver||r.WebKitMutationObserver,c=r.process,u=r.Promise,a="process"==e(22)(c);t.exports=function(){var t,n,e,s=function(){var r,o;for(a&&(r=c.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(a)e=function(){c.nextTick(s)};else if(!i||r.navigator&&r.navigator.standalone)if(u&&u.resolve){var f=u.resolve(void 0);e=function(){f.then(s)}}else e=function(){o.call(r,s)};else{var l=!0,p=document.createTextNode("");new i(s).observe(p,{characterData:!0}),e=function(){p.data=l=!l}}return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){var r=e(7),o=e(9),i=e(64);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},,,,,,,function(t,n,e){t.exports=!e(12)&&!e(10)(function(){return 7!=Object.defineProperty(e(60)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(13),o=e(7),i=e(41);t.exports=e(12)?Object.defineProperties:function(t,n){o(t);for(var e,c=i(n),u=c.length,a=0;u>a;)r.f(t,e=c[a++],n[e]);return t}},function(t,n,e){var r=e(21),o=e(24),i=e(71)(!1),c=e(62)("IE_PROTO");t.exports=function(t,n){var e,u=o(t),a=0,s=[];for(e in u)e!=c&&r(u,e)&&s.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(s,e)||s.push(e));return s}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(7);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},,,,,,,,,,,,,,function(t,n,e){"use strict";var r=e(46),o={};o[e(8)("toStringTag")]="z",o+""!="[object z]"&&e(20)(Object.prototype,"toString",function(){return"[object "+r(this)+"]"},!0)},function(t,n,e){"use strict";var r=e(83)(!0);e(70)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){for(var r=e(85),o=e(41),i=e(20),c=e(6),u=e(16),a=e(32),s=e(8),f=s("iterator"),l=s("toStringTag"),p=a.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=o(v),h=0;h<d.length;h++){var m,y=d[h],g=v[y],_=c[y],w=_&&_.prototype;if(w&&(w[f]||u(w,f,p),w[l]||u(w,l,y),a[y]=p,g))for(m in r)w[m]||i(w,m,r[m],!0)}},function(t,n,e){"use strict";var r,o,i,c,u=e(30),a=e(6),s=e(23),f=e(46),l=e(3),p=e(9),v=e(17),d=e(49),h=e(50),m=e(63),y=e(74).set,g=e(88)(),_=e(64),w=e(89),x=e(75),b=e(90),O=a.TypeError,E=a.process,S=E&&E.versions,P=S&&S.v8||"",T=a.Promise,j="process"==f(E),L=function(){},M=o=_.f,C=!!function(){try{var t=T.resolve(1),n=(t.constructor={})[e(8)("species")]=function(t){t(L,L)};return(j||"function"==typeof PromiseRejectionEvent)&&t.then(L)instanceof n&&0!==P.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),N=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},R=function(t,n){if(!t._n){t._n=!0;var e=t._c;g(function(){for(var r=t._v,o=1==t._s,i=0,c=function(n){var e,i,c,u=o?n.ok:n.fail,a=n.resolve,s=n.reject,f=n.domain;try{u?(o||(2==t._h&&A(t),t._h=1),!0===u?e=r:(f&&f.enter(),e=u(r),f&&(f.exit(),c=!0)),e===n.promise?s(O("Promise-chain cycle")):(i=N(e))?i.call(e,a,s):a(e)):s(r)}catch(t){f&&!c&&f.exit(),s(t)}};e.length>i;)c(e[i++]);t._c=[],t._n=!1,n&&!t._h&&k(t)})}},k=function(t){y.call(a,function(){var n,e,r,o=t._v,i=I(t);if(i&&(n=w(function(){j?E.emit("unhandledRejection",o,t):(e=a.onunhandledrejection)?e({promise:t,reason:o}):(r=a.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=j||I(t)?2:1),t._a=void 0,i&&n.e)throw n.v})},I=function(t){return 1!==t._h&&0===(t._a||t._c).length},A=function(t){y.call(a,function(){var n;j?E.emit("rejectionHandled",t):(n=a.onrejectionhandled)&&n({promise:t,reason:t._v})})},F=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),R(n,!0))},D=function t(n){var e,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===n)throw O("Promise can't be resolved itself");(e=N(n))?g(function(){var o={_w:r,_d:!1};try{e.call(n,s(t,o,1),s(F,o,1))}catch(t){F.call(o,t)}}):(r._v=n,r._s=1,R(r,!1))}catch(t){F.call({_w:r,_d:!1},t)}}};C||(T=function(t){d(this,T,"Promise","_h"),v(t),r.call(this);try{t(s(D,this,1),s(F,this,1))}catch(t){F.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=e(51)(T.prototype,{then:function(t,n){var e=M(m(this,T));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=j?E.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&R(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=s(D,t,1),this.reject=s(F,t,1)},_.f=M=function(t){return t===T||t===c?new i(t):o(t)}),l(l.G+l.W+l.F*!C,{Promise:T}),e(42)(T,"Promise"),e(52)("Promise"),c=e(19).Promise,l(l.S+l.F*!C,"Promise",{reject:function(t){var n=M(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(u||!C),"Promise",{resolve:function(t){return b(u&&this===c?T:this,t)}}),l(l.S+l.F*!(C&&e(76)(function(t){T.all(t).catch(L)})),"Promise",{all:function(t){var n=this,e=M(n),r=e.resolve,o=e.reject,i=w(function(){var e=[],i=0,c=1;h(t,!1,function(t){var u=i++,a=!1;e.push(void 0),c++,n.resolve(t).then(function(t){a||(a=!0,e[u]=t,--c||r(e))},o)}),--c||r(e)});return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=M(n),r=e.reject,o=w(function(){h(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o.e&&r(o.v),e.promise}})},function(t,n,e){"use strict";var r=e(3),o=e(19),i=e(6),c=e(63),u=e(90);r(r.P+r.R,"Promise",{finally:function(t){var n=c(this,o.Promise||i.Promise),e="function"==typeof t;return this.then(e?function(e){return u(n,t()).then(function(){return e})}:t,e?function(e){return u(n,t()).then(function(){throw e})}:t)}})},function(t,n,e){"use strict";var r=e(3),o=e(64),i=e(89);r(r.S,"Promise",{try:function(t){var n=o.f(this),e=i(t);return(e.e?n.reject:n.resolve)(e.v),n.promise}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){e(191),t.exports=e(192)},function(t,n,e){e(116),e(117),e(118),e(119),e(120),e(121),t.exports=e(19).Promise},function(t,n,e){var r=e(5).default;window.setupViamAPI=function(t,n,e,o,i){return o||(o="".concat(window.location.origin,"/api/"),console.warn("API host URL not specified. Fall back to ".concat(o))),i||(i="".concat(window.location.origin,"/wopi/"),console.warn("WOPI host URL not specified. Fall back to ".concat(i))),e||(e="".concat(window.location.origin,"/vcl/js/iframe"),console.warn("Iframe URL not specified. Fall back to ".concat(e))),r.connectToChild({url:e,appendTo:document.getElementById(t),methods:n}).promise.then(function(t){return t.initialize(o,i).then(function(){return t})})}}]);