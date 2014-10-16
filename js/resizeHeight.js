$(document).ready(function() {
	var vph = $(window).height();
	$('[id^="slide"]').css({
		'height': vph + 'px'
	});
	$(window).resize(function() {
		var vph = $(window).height();
		$('[id^="slide"]').css({
			'height': vph + 'px'
		});
	});
});