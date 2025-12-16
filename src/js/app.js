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