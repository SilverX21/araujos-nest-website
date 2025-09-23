document.addEventListener("DOMContentLoaded", function () {
  // --- Scroll Animation Logic ---
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));

  // --- Tech Stack Click Logic ---
  const stackCategories = document.querySelectorAll(".stack-category");

  stackCategories.forEach((card) => {
    card.addEventListener("click", () => {
      if (card.classList.contains("active")) {
        card.classList.remove("active");
      } else {
        stackCategories.forEach((otherCard) => {
          otherCard.classList.remove("active");
        });
        card.classList.add("active");
      }
    });
  });

  // --- Pikachu Hover Logic ---
  const nameHover = document.getElementById("name-hover");
  const pikachu = document.getElementById("pikachu");

  if (nameHover && pikachu) {
    nameHover.addEventListener("mouseover", () => {
      if (pikachu.classList.contains("animate-pikachu")) return;
      pikachu.classList.add("animate-pikachu");
      setTimeout(() => {
        pikachu.classList.remove("animate-pikachu");
      }, 5000);
    });
  }

  // --- UPDATED: Infinite Hobby Carousel Logic ---
  const carousel = document.querySelector(".hobby-carousel");
  if (carousel) {
    const slides = Array.from(carousel.children);
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const totalRealSlides = slides.length;

    if (totalRealSlides > 1) {
      const firstClone = slides[0].cloneNode(true);
      const lastClone = slides[slides.length - 1].cloneNode(true);
      carousel.appendChild(firstClone);
      carousel.insertBefore(lastClone, slides[0]);
    }

    const allSlides = Array.from(carousel.children);
    let currentIndex = totalRealSlides > 1 ? 1 : 0;
    let isTransitioning = false;

    function updateCarouselPosition(instant = false) {
      if (instant) {
        carousel.style.transition = "none";
      } else {
        carousel.style.transition = "transform 0.4s ease-in-out";
      }

      const slideWidth = allSlides[0].getBoundingClientRect().width;
      const offset = -currentIndex * slideWidth;
      carousel.style.transform = `translateX(${offset}px)`;
    }

    nextBtn.addEventListener("click", () => {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex++;
      updateCarouselPosition();
    });

    prevBtn.addEventListener("click", () => {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex--;
      updateCarouselPosition();
    });

    carousel.addEventListener("transitionend", () => {
      isTransitioning = false;
      if (totalRealSlides > 1) {
        if (currentIndex >= allSlides.length - 1) {
          currentIndex = 1;
          updateCarouselPosition(true);
        } else if (currentIndex <= 0) {
          currentIndex = totalRealSlides;
          updateCarouselPosition(true);
        }
      }
    });

    // Initial setup
    updateCarouselPosition(true);
  }
});
