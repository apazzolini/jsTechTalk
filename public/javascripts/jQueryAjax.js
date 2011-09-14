function getFirstName(lastName) {
    $.get('/ajax/getFirstName', {lastName: lastName}, function(data) {
        $('#sampleDiv1').text(data);
    })
}
