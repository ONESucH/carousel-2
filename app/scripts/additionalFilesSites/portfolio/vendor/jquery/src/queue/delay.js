define(["../core","../queue","../effects"],function(e){return e.fn.delay=function(n,f){return n=e.fx?e.fx.speeds[n]||n:n,f=f||"fx",this.queue(f,function(e,f){var t=window.setTimeout(e,n);f.stop=function(){window.clearTimeout(t)}})},e.fn.delay});
//# sourceMappingURL=delay.js.map
