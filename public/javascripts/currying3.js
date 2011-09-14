String.prototype.splitOnSpaces = String.prototype.split.curry(" ");

function annoyingAlert(stringToSplit) {
	$(stringToSplit.splitOnSpaces()).each(function(index, Element) {
		alert(Element);
	});
}
