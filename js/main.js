const backToTop = document.getElementById('back-to-top');

window.onscroll = function () {
    if (window.scrollY === 0) {
        backToTop.style.display = "none"
    } else {
        backToTop.style.display = "block";
    }
};
$(document).ready(function() {
    $('select').niceSelect();
});
$(document).ready(function () {

    // meanmenu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "1366"
    });

    /*slider-active*/
    $('.slider-active').slick({
        infinite: true,
        autoplay: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,

    })
    // gallery-active
    var $grid = $('.gallery-active').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: 1
        }
    })

    // sticky
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $("#header-sticky").removeClass("scroll-header");
        } else {
            $("#header-sticky").addClass("scroll-header");
        }
    });
})