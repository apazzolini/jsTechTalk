var cache = {};

function resolveFirstName(lastName) {
    return cache[lastName] || 
    	$.get('/ajax/getFirstNameSlow', { lastName: lastName }, function(data) {
            cache[lastName] = data;
    	});
}

function getFirstNameCached(lastName) {
    $.when(resolveFirstName(lastName))
        .then(function(data){
            $('#sampleDiv1').text(data);
        });
}
