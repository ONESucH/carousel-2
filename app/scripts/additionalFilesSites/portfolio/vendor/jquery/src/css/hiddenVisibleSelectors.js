define(["../core","../selector"],function(e){e.expr.filters.hidden=function(t){return!e.expr.filters.visible(t)},e.expr.filters.visible=function(e){return e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0}});
//# sourceMappingURL=hiddenVisibleSelectors.js.map
