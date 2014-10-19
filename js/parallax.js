$(document).ready(function() {
	$(window).bind('scroll', function(e) {
		parallax();
	});

	$('header a').click(function(event) {
        var id = $(event.target).attr("href");
		$('html, body').animate({scrollTop: $(id).offset().top}, 1200,
			function() {
				parallax();
			});
	});

});

function parallax() {
	var scrollPosition = $(window).scrollTop();
}