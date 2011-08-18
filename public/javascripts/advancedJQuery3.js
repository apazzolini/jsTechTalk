$('#sampleLink2').click(function(e) {
    e.preventDefault();
    alert("I would have gone to " + $(this).attr('href'));
});
