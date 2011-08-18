var Counter = (function (c) {
	var secretCount = 7;
	
	$.extend(c, {
		countBySecret: function() {
			c.setCount(c.getCount() + secretCount);
			return c.getCount();
		}
	});
	
	return c;
}(Counter));
