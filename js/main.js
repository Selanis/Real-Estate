

new Swiper('.swiper-container', {
    loop: true,
    loopedSlides: 2,
    centeredSlides: true,
    slidesPerView: 3,
    navigation: {
        prevEl: '.sw-prev',
        nextEl: '.sw-next',
    },
    spaceBetween: 114,
    speed: 750,
})

let bg_right_button = document.getElementById('sw-next'),
    bg_left_button = document.getElementById('sw-prev'),
    bgSwiper = document.getElementById('bgSwiper');

bg_left_button.addEventListener('click', (e) => {
    if (bgSwiper.classList.contains('swiper-bg-active')) {
        bgSwiper.classList.remove('swiper-bg-active');
    } else {
        bgSwiper.classList.add('swiper-bg-active');
    };
});

bg_right_button.addEventListener('click', (e) => {
    if (bgSwiper.classList.contains('swiper-bg-active')) {
        bgSwiper.classList.remove('swiper-bg-active');
    } else {
        bgSwiper.classList.add('swiper-bg-active');
    };
});

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})