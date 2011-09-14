function getFirstName2(lastName) {
    $.get('/ajax/getFirstNameSlow', {lastName: lastName}, function(data) {
        $('#sampleDiv1').text(data);
    })
}
