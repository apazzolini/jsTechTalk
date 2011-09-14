function getFirstName3(lastName) {
    showLoadingIcon('#sampleDiv1');
    $.get('/ajax/getFirstNameSlow', {lastName: lastName}, function(data) {
        $('#sampleDiv1').text(data);
    })
}

function showLoadingIcon(element) {
    $(element).html('&lt;img src="/public/images/ajax-loader.gif" />');
}
