function getFirstName(lastName) {
    var firstNameRequest = $.get('/ajax/getFirstName', {lastName: lastName})
        .success(function(data) {
            $('#sampleDiv1').text(data);
        })
        .success(function(data) {
        	alert(data);
        });
}
