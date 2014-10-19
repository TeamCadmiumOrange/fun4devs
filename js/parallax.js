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

    var up = $('#go-up');
    var down = $('#go-down');

    up.click(function () {
       var hash = window.location.hash;
       var currentNum = parseInt(hash.substr(8,2));

        if(currentNum > 0)
            scrollTo(currentNum - 1);
    });

    down.click(function () {
        var hash = window.location.hash;
        var currentNum = 0;

        if(hash != "#slide-home")
            currentNum = parseInt(hash.substr(8,2));

        if(currentNum < 12)
            scrollTo(currentNum + 1);
    });
});

function scrollTo(num) {
    var id = "#slide-p" + num;

    if (num == 0)
        id = "#slide-home";

    $('html, body').animate({scrollTop: $(id).offset().top}, 1200, function () {
        window.location = id;
    });
}

function parallax() {
	var scrollPosition = $(window).scrollTop();
}