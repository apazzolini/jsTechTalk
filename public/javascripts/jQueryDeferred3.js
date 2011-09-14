function showDiv() {
    var dfd = $.Deferred();
    $('#sampleDiv2').fadeIn(1000, dfd.resolve);
    return dfd.promise();
}

function doIt() {
    $.when(showDiv())
        .then(function () {
	         $('#sampleDiv2').text("Finished fading in!");
        });
}
