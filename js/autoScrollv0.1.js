$(document).ready(function () {
    window.location.hash = "slide-p1"
    var hash = window.location.hash;
    var num = hash.substr(8, 2);
    var count = $(".content").children().length;
    $("#page").val(num + " / " + count)

    $("#go-up").click(function () {
        scrollToPrew();
    });

    $("#go-down").click(function () {
        scrollToNext();
    });

    //Generic method for menuButtons
    $('.MenuButton').click(function () {
        var loc = window.location.toString();
        var pageid = $(this).data("pageid");

        if (loc.indexOf(pageid) > -1)
            scroll("#slide-p1");
        else
            window.location = pageid;
    });
});

$(window).bind('mousewheel', function (event) {
    scrollToSlide(event);
});

$(window).bind('touchmove', function (event) {
    scrollToSlide(event);
});

// Up Down arrows scroll
$(document).keydown(function(e) {
    switch(e.which) {
        case 38: // up
        scrollToPrew();
        break;

        case 40: // down
        scrollToNext();
        break;

        default: return;
    }
    e.preventDefault();
});

function scrollToSlide(event) {
    event.preventDefault();
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
    if (hash == "#undefined")
        return;

    $('html, body').stop().animate({
        'scrollTop': $(hash).offset().top - 50
    }, 700, 'swing', function () {
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