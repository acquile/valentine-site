document.addEventListener("DOMContentLoaded", () => {

  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const bgMusic = document.getElementById("bgMusic");
  const mainCard = document.getElementById("mainCard");
  const loveCard = document.getElementById("loveCard");

  let heartInterval; // prevent multiple intervals

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
  }

  // ---------- HEART ANIMATION (UPGRADED) ----------
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Random heart emoji
    const hearts = ["💗", "💖", "💘", "💝", "💕"];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    // Random position
    heart.style.left = Math.random() * 100 + "vw";

    // Random size
    heart.style.fontSize = (Math.random() * 25 + 15) + "px";

    // Random speed
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
  }

  // ---------- YES BUTTON ----------
  if (yesBtn) {
    yesBtn.addEventListener("click", () => {

      if (bgMusic) {
        bgMusic.play().catch(err => console.log("Playback blocked:", err));
      }

      // Fade out main card
      mainCard.style.transition = "opacity 0.6s ease";
      mainCard.style.opacity = "0";

      setTimeout(() => {

        mainCard.style.display = "none";

        // Show love card properly
        loveCard.style.display = "block";
        loveCard.style.opacity = "0";
        loveCard.style.transition = "opacity 0.8s ease";

        void loveCard.offsetWidth; // force reflow
        loveCard.style.opacity = "1";

        // Prevent multiple intervals if clicked again
        if (!heartInterval) {
          heartInterval = setInterval(() => {
            for (let i = 0; i < 4; i++) { // 4 hearts per burst
              createHeart();
            }
          }, 200);
        }

      }, 600);
    });
  }

});
