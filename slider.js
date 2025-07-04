// slider.js
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // OPTIONAL: auto slide la 5 secunde
  setInterval(nextSlide, 5000);
});

document.addEventListener('DOMContentLoaded', function() {
  // Selectează toate imaginile
  const images = document.querySelectorAll('.menu-slider .slide');
  
  // Creează elementul pentru overlay
  const overlay = document.createElement('div');
  overlay.className = 'image-overlay';
  document.body.appendChild(overlay);
  
  // Creează elementul pentru imaginea mărită
  const zoomedImg = document.createElement('img');
  zoomedImg.className = 'zoomed-image';
  overlay.appendChild(zoomedImg);
  
  // Adaugă event listener pentru fiecare imagine
  images.forEach(img => {
    img.addEventListener('click', function() {
      // Afișează overlay-ul
      overlay.style.display = 'flex';
      // Setează sursa imaginii mărite
      zoomedImg.src = this.src;
      zoomedImg.alt = this.alt;
    });
  });
  
  // Închide overlay-ul când se apasă pe el
  overlay.addEventListener('click', function() {
    this.style.display = 'none';
  });
});
