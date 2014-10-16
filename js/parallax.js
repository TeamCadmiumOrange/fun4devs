$(document).ready(function() {
	$(window).bind('scroll', function(e) {
		parallax();
	});

	$('a').click(function(event) {
		var temp = $(event.target).attr('class');
		var id = '#slide-' + temp;
		$('html, body').animate({scrollTop: $(id).offset().top}, 1200,
			function() {
				parallax();
			});
	});

});

function parallax() {
	var scrollPosition = $(window).scrollTop();
}