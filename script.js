document.addEventListener("DOMContentLoaded", () => {

  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const bgMusic = document.getElementById("bgMusic");
  const mainCard = document.getElementById("mainCard");
  const loveCard = document.getElementById("loveCard");

  // ---------- NO BUTTON ----------
  function dodgeNoButton() {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const margin = 20;
    const maxX = window.innerWidth - btnWidth - margin;
    const maxY = window.innerHeight - btnHeight - margin;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  }

  if (noBtn) {
    noBtn.addEventListener("click", e => {
      e.preventDefault();
      dodgeNoButton();
    });

    noBtn.addEventListener("touchstart", e => {
      e.preventDefault();
      dodgeNoButton();
    });

    noBtn.addEventListener("mouseenter", () => {
      noBtn.style.animation = "shake 0.5s infinite";
    });

    noBtn.addEventListener("mouseleave", () => {
      noBtn.style.animation = "none";
    });
  }

  // ---------- HEART ANIMATION ----------
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }

  // ---------- YES BUTTON (SEAMLESS) ----------
  if (yesBtn) {
    yesBtn.addEventListener("click", () => {

      // 🎵 Start music (works on mobile because it's user-triggered)
      if (bgMusic) {
        bgMusic.play().catch(err => console.log("Playback blocked:", err));
      }

      // Fade out question card
      mainCard.style.transition = "opacity 0.6s ease";
      mainCard.style.opacity = "0";

      setTimeout(() => {
        mainCard.style.display = "none";
        loveCard.style.display = "block";

        // Fade in love card
        loveCard.style.transition = "opacity 0.8s ease";
        loveCard.style.opacity = "1";

        // Start floating hearts
        setInterval(createHeart, 400);

      }, 600);
    });
  }

});
