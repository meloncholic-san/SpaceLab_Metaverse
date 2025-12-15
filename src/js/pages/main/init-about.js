import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


export function initAbout() {
    function updateSlides (swiper) {
        currentSlide.innerHTML = `${swiper.realIndex + 1} <span>Chapter</span>`;
        nextSlide.textContent = `${swiper.realIndex + 1 === totalSlides ? 1 : swiper.realIndex + 1 + 1}`
    }
    
    const aboutSwiper = new Swiper('.main-about__swiper', {
        modules: [Pagination, Autoplay],
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.main-about__progressbar',
            type: 'progressbar',
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 1000,
    });

    const progressbar = document.querySelector('.main-about__progressbar');

    aboutSwiper.on('slideChangeTransitionStart', () => {
        progressbar.classList.remove('is-active');
    });

    aboutSwiper.on('slideChangeTransitionEnd', () => {
        progressbar.classList.add('is-active');
    });

    progressbar.classList.add('is-active');

    const currentSlide = document.querySelector('.main-about__progressbar__current-slide');
    const nextSlide = document.querySelector('.main-about__progressbar__next-slide');
    const totalSlides = document.querySelectorAll('.main-about__swiper .swiper-slide').length;
    updateSlides(aboutSwiper);
    aboutSwiper.on('slideChange', () => updateSlides(aboutSwiper));




} 
