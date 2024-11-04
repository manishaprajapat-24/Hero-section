 document.addEventListener('DOMContentLoaded', () => {
    const heroImages = document.querySelectorAll('.hero-image');

     heroImages.forEach((image) => {
        image.addEventListener('mousemove', (e) => {
            const { offsetX, offsetY, target } = e;
            const { clientWidth, clientHeight } = target;
            const moveX = (offsetX - clientWidth / 2) * 0.1;
            const moveY = (offsetY - clientHeight / 2) * 0.1;

            image.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
        });

        image.addEventListener('mouseleave', () => {
            image.style.transform = 'translate(0, 0) scale(1)';
        });
    });

     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
