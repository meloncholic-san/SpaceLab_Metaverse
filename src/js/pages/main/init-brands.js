export function initBrands() {
    const cards = document.querySelectorAll('.main-brands__card-img-wrapper');
    const isTouch = 'ontouchstart' in window;
    cards.forEach(card => {

    if (!isTouch) {
        card.addEventListener('mousemove', e => {
            handleTilt(card, e.clientX, e.clientY);
        });

        card.addEventListener('mouseleave', () => {
            resetTilt(card);
        });
    }

    let rect = null;
    if (isTouch) {

        card.addEventListener('touchstart', e => {
            rect = card.getBoundingClientRect();
            const touch = e.touches[0];
            handleTilt(card, touch.clientX, touch.clientY);
        });

        card.addEventListener('touchmove', e => {
            const touch = e.touches[0];
            handleTilt(card, touch.clientX, touch.clientY);
        });

        card.addEventListener('touchend', () => {
            resetTilt(card);
        });
    }
    
    });



    function handleTilt(card, clientX, clientY) {
        const rect = card.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const maxTilt = 10;

        const rotateX = ((y - centerY) / centerY) * maxTilt;
        const rotateY = ((x - centerX) / centerX) * maxTilt;

        card.style.transform = `perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    }

    function resetTilt(card) {
        card.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg)`;
    }
}
