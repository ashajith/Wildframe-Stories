document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".collage-grid");
  if (!slides.length) return;

  let offset = 0;
  let slideStep = 0;
  let maxOffset = 0;
  let timerId;

  function isMobile() {
    return window.innerWidth <= 768;
  }

  function setup() {
    offset = 0;

    const slideWidth = slides[0].getBoundingClientRect().width + 12;

    slideStep = isMobile()
      ? slideWidth * 0.85   // smaller step for mobile
      : slideWidth * 0.6;

    maxOffset = -(slideStep * (slides.length - 1));
  }

  function slideOnce() {
    offset -= slideStep;
    if (offset < maxOffset) offset = 0;

    slides.forEach(slide => {
      slide.style.transform = `translateX(${offset}px)`;
    });

    timerId = setTimeout(slideOnce, isMobile() ? 3500 : 3000);
  }

  requestAnimationFrame(() => {
    setup();
    slideOnce();
  });

  window.addEventListener("resize", () => {
    clearTimeout(timerId);
    setup();
    slideOnce();
  });
});
