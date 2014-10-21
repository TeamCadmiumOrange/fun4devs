 $(document).ready(function() {
 	window.location.hash = "slide-p1"
 	var hash = window.location.hash;
 	var num = hash.substr(8, 2);
 	var count = $(".content").children().length;
 	$("#page").val(num + " / " + count)

 	$("#go-up").click(function() {
 		scrollToPrew();
 	});

 	$("#go-down").click(function() {
 		scrollToNext();
 	});

    $('#logo').click(function(){
        scroll("#slide-p1");
    });

 });

 $(window).bind('mousewheel', function(event) {
 	scrollToSlide(event);
 });

 $(window).bind('touchmove', function(event) {
 	scrollToSlide(event);
 });

 function scrollToSlide(event) {
 	if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
 		scrollToPrew();
 	} else {
 		scrollToNext();
 	}
 }

 function scrollToNext() {
 	var temp = window.location.hash.substr(1, 15),
 		next = "#" + $(".content").children("div[id='" + temp + "']").next().attr("id");
 	scroll(next);
 };

 function scrollToPrew() {
 	var temp = window.location.hash.substr(1, 15),
 		next = "#" + $(".content").children("div[id='" + temp + "']").prev().attr("id");
 	scroll(next);
 };

 function scroll(hash) {
 	//scroll & animation
 	$('html, body').stop().animate({
 		'scrollTop': $(hash).offset().top - 50
 	}, 700, 'swing', function() {
 		window.location.hash = hash;
 	});
 	updatePageNum(hash);
 };

 function updatePageNum(hash) {
 	//update page num
 	var num = hash.substr(8, 2);
 	var count = $(".content").children().length;
 	$("#page").val(num + " / " + count);
 }