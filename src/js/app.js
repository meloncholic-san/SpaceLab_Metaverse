import '@scss/styles.scss';

import { initHeader } from './components/init-header';
import { initLazyImages } from './components/init-lazyimages';
import { useLoadFunction } from 'lazy-viewport-loader';

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initLazyImages();

  useLoadFunction(
    async () => {
      const { initAbout } = await import('./pages/main/init-about');
      initAbout();
    },
    '.main-about'
  );

  useLoadFunction(
    async () => {
      const { initRoadmap } = await import('./pages/main/init-roadmap');
      initRoadmap();
    },
    '.main-roadmap'
  );

  useLoadFunction(
    async () => {
      const { initMainMedia } = await import('./pages/main/init-media');
      initMainMedia();
    },
    '.main-media'
  );

  useLoadFunction(
    async () => {
        const { initBrands } = await import('./pages/main/init-brands');
        initBrands();
    },
    '.main-brands'
  );


    useLoadFunction(
    async () => {
        const { initTeam } = await import('./pages/main/init-team');
        initTeam();
    },
    '.main-team'
  );

    useLoadFunction(
    async () => {
        const { initFAQ } = await import('./pages/main/init-faq');
        initFAQ();
    },
    '.main-faq'
  );
});



// import { initMain } from "../pages/initMain.js";
// import { initHeader } from "../components/init-header.js";
// import { initAbout } from "../pages/init-about.js";
// import { initNews } from "../pages/init-news.js";
// import { initOneNews } from "../pages/init-one-news.js";
// import { initOneProject } from "../pages/init-one-project.js";
// import { initProjects } from "../pages/init-projects.js";
// import { initLazyImages } from "./load-images.js";
// import { initPreloader } from "../components/init-preloader.js";
// import { initPopUp } from "../components/init-pop-up.js";
// document.addEventListener("DOMContentLoaded", () => {

//     initHeader();
//     initLazyImages();
//     initPreloader();
//     initPopUp();
    
//     if (document.body.id === "main-page") {
//         initMain();
//     } 
//     if (document.body.id === "about-page") {
//         initAbout();
//     } 
//     if (document.body.id === "news-page") {
//         initNews();
//     }
//     if (document.body.id === "one-news-page") {
//         initOneNews();   
//     }
//     if (document.body.id === "one-project-page") {
//         initOneProject();
//     }
//     if (document.body.id === "projects-page") {
//         initProjects();
//     }
// });
