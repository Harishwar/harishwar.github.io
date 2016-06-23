$(window).load(function() {
    $('body').removeClass('preload');
});

/* Navbar */
$('body').on({
    swiperight: function() {
        $('.nav-bg').show();
        $('.nav-effect').addClass('open');
        $('.nav-icon').addClass('on').addClass('hover').addClass('dark').off('mouseleave');
    },
    swipeleft: function() {
        $('.nav-bg').hide();
        $('.nav-effect').removeClass('open');
        $('.nav-icon').mouseleave(function() {
            $(this).toggleClass('hover');
        }).removeClass('on').removeClass('hover').removeClass('dark');
    },
});

$('.nav-icon').on({
    mouseover: function() {
        $(this).addClass('hover');
    },
    mouseleave: function() {
        $(this).removeClass('hover');
    },
    click: function() {
        $(this).mouseleave(function() {
            $(this).toggleClass('hover');
        }).addClass('hover').toggleClass('on').toggleClass('dark');
        $('.nav-effect').toggleClass('open');
        $('.nav-bg').toggle();
    }
});

$('.nav-bg').on({
    click: function(e) {
        $('.nav-effect').removeClass('open');
        $('.nav-icon').mouseleave(function() {
            $(this).toggleClass('hover');
        }).removeClass('on').removeClass('hover').removeClass('dark');
        $(this).toggle();
    }
});

/* Unsplash */
var Unsplash = new UnsplashPhoto();
var images = [
    // 'BYu8ITUWMfc',
    // 'vwY2D2Wr4ME',
    'KxWdfIgQTUE',
    'RJK6p5MJACQ',
    'Evdzs-qe2E0'
];
var index = Math.floor(Math.random() * images.length);
var imageURL = Unsplash.find(images[index]).fetch();
$('body').css('background-image', 'url(' + imageURL + ')');
