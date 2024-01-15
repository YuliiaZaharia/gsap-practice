document.addEventListener('DOMContentLoaded', function () {
    const numberOfCircles = 10;

    for (let i = 0; i < numberOfCircles; i++) {
      createCircle();
    }

    function createCircle() {
      const circle = document.createElement('div');
      circle.classList.add('circle');
      document.body.appendChild(circle);

      gsap.to(circle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 2,
        duration: Math.random() * 3 + 1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }
  });