//= ../../../../node_modules/slick-carousel/slick/slick.js
$('.reviews__slider').slick({
    dots: true,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="assets/img/icons/arrow-left.svg" alt="slider-arrow"></button> ',
    nextArrow: '<button class="slick-arrow slick-next"><img src="assets/img/icons/arrow-left.svg" alt="slider-arrow"></button> ',
    responsive: [
        {
            breakpoint: 675,
            settings: {
                dots: false,
                arrows: false
            }
        }

    ]
});