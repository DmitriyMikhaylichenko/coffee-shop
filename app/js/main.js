// // ==========mobile-menu===============================

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e){
        document.body.classList.toggle('no-scroll');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
}
// ===================================================

$('.customers__reviews').slick({
    slidesToShow: 2,
    dots: true,
    appendArrows: $('.customers__controls-arrows'),
    appendDots: $('.customers__controls-dots'),
    infinite: false,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 1
            }
        }
    ]
})


$(function () {

})