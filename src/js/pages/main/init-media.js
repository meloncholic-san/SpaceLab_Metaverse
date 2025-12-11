import Swiper from 'swiper';

import 'swiper/css';

export function initMainMedia() {
    const mediaSwiper = new Swiper('.main-media__swiper', {
        slidesPerView: 'auto',
        spaceBetween: -7,
        calculateHeight: false,
    });
}