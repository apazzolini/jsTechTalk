function squareNumbers() {
    $('#sampleDiv5').find('div').each(function(index, Element) {
    	var originalValue = $(Element).text();
    	if (originalValue.indexOf('=') != -1) {
    	    originalValue = originalValue.substring(originalValue.indexOf('=') + 2);
    	}
    	
    	var square = originalValue * originalValue;
    	var text = originalValue + "^2 = " + square;
    	
        $(Element).html(text);
    });
}
