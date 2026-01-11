// Banner
document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "assets/images/Birds/bird1.jpg",
    "assets/images/Birds/bird2.jpg",
    "assets/images/Animals/animal1.jpg",
    "assets/images/Animals/animal2.jpg",
    "assets/images/Birds/bird3.jpg",
    "assets/images/Birds/bird4.jpg",
    "assets/images/Animals/animal3.jpg",
    "assets/images/Animals/animal4.jpg",
    "assets/images/Birds/bird5.jpg",
    "assets/images/Animals/animal5.jpg",
    "assets/images/Animals/animal6.jpg",
  ];

  const layers = document.querySelectorAll(".hero-bg");
  let index = 0;

  layers[0].style.backgroundImage = `url(${images[0]})`;

  setInterval(() => {
    const current = layers[index % 2];
    const next = layers[(index + 1) % 2];

    next.style.backgroundImage =
      `url(${images[(index + 1) % images.length]})`;

    current.classList.remove("active");
    next.classList.add("active");

    index++;
  }, 3000); // change every 5s
});


// Auto Gallery Scroll
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".collage-grid");
  if (!slides.length) return;

  let offset = 0;
  let slideStep = 0;
  let maxOffset = 0;
  let timerId;

  function setup() {
    const slideWidth = slides[0].getBoundingClientRect().width + 10;
    slideStep = slideWidth * 0.6;
    maxOffset = -(slideStep * (slides.length - 1));
  }

  function slideOnce() {
    offset -= slideStep;
    if (offset < maxOffset) offset = 0;

    slides.forEach(slide => {
      slide.style.transform = `translateX(${offset}px)`;
    });

    timerId = setTimeout(slideOnce, 3000);
  }

  requestAnimationFrame(() => {
    setup();
    slideOnce(); // starts immediately, no pause
  });

  window.addEventListener("resize", setup);
});
