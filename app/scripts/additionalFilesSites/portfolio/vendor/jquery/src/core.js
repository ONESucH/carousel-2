define(["./var/arr","./var/document","./var/slice","./var/concat","./var/push","./var/indexOf","./var/class2type","./var/toString","./var/hasOwn","./var/support"],function(t,n,r,e,o,i,u,c,a,l){function s(t){var n=!!t&&"length"in t&&t.length,r=p.type(t);return"function"!==r&&!p.isWindow(t)&&("array"===r||0===n||"number"==typeof n&&n>0&&n-1 in t)}var f="@VERSION",p=function(t,n){return new p.fn.init(t,n)},h=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,y=/^-ms-/,d=/-([\da-z])/gi,g=function(t,n){return n.toUpperCase()};return p.fn=p.prototype={jquery:f,constructor:p,selector:"",length:0,toArray:function(){return r.call(this)},get:function(t){return null!=t?t<0?this[t+this.length]:this[t]:r.call(this)},pushStack:function(t){var n=p.merge(this.constructor(),t);return n.prevObject=this,n.context=this.context,n},each:function(t){return p.each(this,t)},map:function(t){return this.pushStack(p.map(this,function(n,r){return t.call(n,r,n)}))},slice:function(){return this.pushStack(r.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var n=this.length,r=+t+(t<0?n:0);return this.pushStack(r>=0&&r<n?[this[r]]:[])},end:function(){return this.prevObject||this.constructor()},push:o,sort:t.sort,splice:t.splice},p.extend=p.fn.extend=function(){var t,n,r,e,o,i,u=arguments[0]||{},c=1,a=arguments.length,l=!1;for("boolean"==typeof u&&(l=u,u=arguments[c]||{},c++),"object"==typeof u||p.isFunction(u)||(u={}),c===a&&(u=this,c--);c<a;c++)if(null!=(t=arguments[c]))for(n in t)r=u[n],e=t[n],u!==e&&(l&&e&&(p.isPlainObject(e)||(o=p.isArray(e)))?(o?(o=!1,i=r&&p.isArray(r)?r:[]):i=r&&p.isPlainObject(r)?r:{},u[n]=p.extend(l,i,e)):void 0!==e&&(u[n]=e));return u},p.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isFunction:function(t){return"function"===p.type(t)},isArray:Array.isArray,isWindow:function(t){return null!=t&&t===t.window},isNumeric:function(t){var n=t&&t.toString();return!p.isArray(t)&&n-parseFloat(n)+1>=0},isPlainObject:function(t){var n;if("object"!==p.type(t)||t.nodeType||p.isWindow(t))return!1;if(t.constructor&&!a.call(t,"constructor")&&!a.call(t.constructor.prototype||{},"isPrototypeOf"))return!1;for(n in t);return void 0===n||a.call(t,n)},isEmptyObject:function(t){var n;for(n in t)return!1;return!0},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?u[c.call(t)]||"object":typeof t},globalEval:function(t){var r,e=eval;t=p.trim(t),t&&(1===t.indexOf("use strict")?(r=n.createElement("script"),r.text=t,n.head.appendChild(r).parentNode.removeChild(r)):e(t))},camelCase:function(t){return t.replace(y,"ms-").replace(d,g)},nodeName:function(t,n){return t.nodeName&&t.nodeName.toLowerCase()===n.toLowerCase()},each:function(t,n){var r,e=0;if(s(t))for(r=t.length;e<r&&n.call(t[e],e,t[e])!==!1;e++);else for(e in t)if(n.call(t[e],e,t[e])===!1)break;return t},trim:function(t){return null==t?"":(t+"").replace(h,"")},makeArray:function(t,n){var r=n||[];return null!=t&&(s(Object(t))?p.merge(r,"string"==typeof t?[t]:t):o.call(r,t)),r},inArray:function(t,n,r){return null==n?-1:i.call(n,t,r)},merge:function(t,n){for(var r=+n.length,e=0,o=t.length;e<r;e++)t[o++]=n[e];return t.length=o,t},grep:function(t,n,r){for(var e,o=[],i=0,u=t.length,c=!r;i<u;i++)e=!n(t[i],i),e!==c&&o.push(t[i]);return o},map:function(t,n,r){var o,i,u=0,c=[];if(s(t))for(o=t.length;u<o;u++)i=n(t[u],u,r),null!=i&&c.push(i);else for(u in t)i=n(t[u],u,r),null!=i&&c.push(i);return e.apply([],c)},guid:1,proxy:function(t,n){var e,o,i;if("string"==typeof n&&(e=t[n],n=t,t=e),p.isFunction(t))return o=r.call(arguments,2),i=function(){return t.apply(n||this,o.concat(r.call(arguments)))},i.guid=t.guid=t.guid||p.guid++,i},now:Date.now,support:l}),"function"==typeof Symbol&&(p.fn[Symbol.iterator]=t[Symbol.iterator]),p.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,n){u["[object "+n+"]"]=n.toLowerCase()}),p});
//# sourceMappingURL=core.js.map
