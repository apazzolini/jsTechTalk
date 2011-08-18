function getFirstNames(lastName1, lastName2) {
    var firstRequest = $.get('/ajax/getFirstName', {lastName: lastName1});
    var secondRequest = $.get('/ajax/getFirstName', {lastName: lastName2});
	
    $.when(firstRequest, secondRequest)
        .then(function (firstResponse, secondResponse) {
    	    $('#sampleDiv1').text((firstResponse[0] + '---' + secondResponse[0]));
        });
}
