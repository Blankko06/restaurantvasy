const slides = document.querySelectorAll('.menu-slider .slide');
const overlay = document.querySelector('.image-overlay');
const zoomedImg = document.querySelector('.zoomed-image');

slides.forEach(slide => {
  slide.addEventListener('click', () => {
    zoomedImg.src = slide.src;
    overlay.style.display = 'flex';
  });
});

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  zoomedImg.src = '';
});
