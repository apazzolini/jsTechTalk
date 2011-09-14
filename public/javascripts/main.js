function fadeReplace(fadeOut, fadeIn) {
	$(fadeOut).fadeOut("fast", function() {
		$(fadeIn).fadeIn("medium");
	});
}

function fadeInNextStep(fadeIn, oldLink, newLink) {
	$(fadeIn).fadeIn(); 
	$(oldLink).hide(); 
	if (newLink != null) {
		$(newLink).show();
	}
}
