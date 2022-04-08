/*
    Referências:

    - https://www.youtube.com/watch?v=tOUlVIMqhcc&t=480s
    - https://github.com/Jhon-20/Carrusel-Cards-Swiper
*/

let swiper_1 = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev'
    },
    slidesPerView: 1,
    spaceBetween: 10,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        520: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        580: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        820: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1140: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    }
});