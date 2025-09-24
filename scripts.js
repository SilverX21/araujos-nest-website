document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("particle-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let particlesArray;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = "rgba(0, 122, 204, 0.5)";
        ctx.fill();
      }
      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      let numberOfParticles = (canvas.height * canvas.width) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 2 + 1;
        let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
        let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
        let directionX = Math.random() * 0.4 - 0.2;
        let directionY = Math.random() * 0.4 - 0.2;
        particlesArray.push(new Particle(x, y, directionX, directionY, size));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, innerWidth, innerHeight);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }

    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance =
            (particlesArray[a].x - particlesArray[b].x) *
              (particlesArray[a].x - particlesArray[b].x) +
            (particlesArray[a].y - particlesArray[b].y) *
              (particlesArray[a].y - particlesArray[b].y);
          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - distance / 20000;
            ctx.strokeStyle = `rgba(0, 122, 204, ${opacityValue})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    window.addEventListener("resize", () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      init();
    });

    init();
    animate();
  }

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

  // UPDATED: Hobbies array with your local images
  const hobbies = [
    {
      title: "Scouts",
      desc: "Developing leadership and outdoor skills.",
      img: "public/scouts-logo.jpg",
    },
    {
      title: "SC Braga",
      desc: "Passionate supporter of my hometown club.",
      img: "public/cr7.jpg",
    },
    {
      title: "Music",
      desc: "My daily companion, from rock to chill playlists.",
      img: "public/metallica.jpeg",
    },
    {
      title: "Photography",
      desc: "Capturing moments and landscapes.",
      img: "public/photography.jpeg",
    },
  ];

  const flipper = document.querySelector(".hobby-carousel-flipper");
  if (flipper) {
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const cardFront = document.querySelector(".card-front");
    const cardBack = document.querySelector(".card-back");

    let currentIndex = 0;
    let currentRotation = 0;
    let isFlipped = false;
    let isAnimating = false;

    function updateCardContent(cardElement, index) {
      const hobby = hobbies[index];
      cardElement.innerHTML = `
                <img src="${hobby.img}" alt="${hobby.title}" />
                <h4>${hobby.title}</h4>
                <p>${hobby.desc}</p>
            `;
    }

    function flip(direction) {
      if (isAnimating) return;
      isAnimating = true;

      const nextIndex =
        (currentIndex + direction + hobbies.length) % hobbies.length;

      const backCard = isFlipped ? cardFront : cardBack;
      updateCardContent(backCard, nextIndex);

      currentRotation += 180 * direction;
      flipper.style.transform = `rotateY(${currentRotation}deg)`;

      isFlipped = !isFlipped;
      currentIndex = nextIndex;

      setTimeout(() => {
        isAnimating = false;
      }, 800);
    }

    nextBtn.addEventListener("click", () => flip(1));
    prevBtn.addEventListener("click", () => flip(-1));

    updateCardContent(cardFront, currentIndex);
    updateCardContent(cardBack, (currentIndex + 1) % hobbies.length);
  }
});
