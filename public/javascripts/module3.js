var Counter = (function () {
    var count = 0;
    
    return {
    	reset: function() {
    		count = 0;
    		return count;
    	},
    
    	countByOne: function() {
    		count = count + 1;
    		return count;
    	},
    	
    	countByFive: function() {
    		count = count + 5;
    		return count;
    	},
    	
    	getCount: function() {
    		return count;
    	}, 
    	
    	setCount: function(newCount) {
    		count = newCount;
    	}
    };
}());
