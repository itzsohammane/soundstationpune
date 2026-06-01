// Grab the elements from the HTML
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Add a click event listener
hamburger.addEventListener('click', () => {
  // Toggle the 'active' class on and off
  navLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.carousel-container');
  const slides = document.querySelectorAll('.carousel-slide');
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');
  const dots = document.querySelectorAll('.dot');
  
  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoPlayInterval;

  // Function to update the carousel position and active states
  const updateCarousel = (index) => {
    // Handle wrap-around
    if (index >= totalSlides) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalSlides - 1;
    } else {
      currentIndex = index;
    }

    // Move the container
    container.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
  };

  // Event Listeners for Arrows
  nextBtn.addEventListener('click', () => {
    updateCarousel(currentIndex + 1);
    resetAutoPlay();
  });

  prevBtn.addEventListener('click', () => {
    updateCarousel(currentIndex - 1);
    resetAutoPlay();
  });

  // Event Listeners for Dots
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const index = parseInt(e.target.getAttribute('data-index'));
      updateCarousel(index);
      resetAutoPlay();
    });
  });

  // Auto-play functionality
  const startAutoPlay = () => {
    autoPlayInterval = setInterval(() => {
      updateCarousel(currentIndex + 1);
    }, 5000); // Change slide every 5 seconds
  };

  const resetAutoPlay = () => {
    clearInterval(autoPlayInterval);
    startAutoPlay();
  };

  // Initialize
  startAutoPlay();
});