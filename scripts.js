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

  // --- NEW: Tech Stack Click Logic ---
  const stackCategories = document.querySelectorAll(".stack-category");

  stackCategories.forEach((card) => {
    card.addEventListener("click", () => {
      // If the clicked card is already active, remove the class to close it
      if (card.classList.contains("active")) {
        card.classList.remove("active");
      } else {
        // Otherwise, remove 'active' from all other cards
        stackCategories.forEach((otherCard) => {
          otherCard.classList.remove("active");
        });
        // And add 'active' to the clicked card
        card.classList.add("active");
      }
    });
  });
});
