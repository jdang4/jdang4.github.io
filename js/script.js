$(document).ready(function () {
    var offset = -50;
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top + offset
            }, 1000);
        }
    });
});