document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const mainCard = document.getElementById("mainCard"); // the card container
  const yesSound = document.getElementById("yesSound");
  const isYesPage = !!yesSound;

  // ---------- NO BUTTON ----------
  function dodgeNoButton() {
    if (!mainCard) return;

    // Get card position
    const cardRect = mainCard.getBoundingClientRect();

    // Limits: stay inside card padding, above photo
    const minX = 10;
    const maxX = cardRect.width - noBtn.offsetWidth - 10;

    const minY = 10; // slightly below top of card
    const maxY = cardRect.height - noBtn.offsetHeight - 60; // above buttons/photo bottom

    // Random position within card
    const randomX = Math.floor(Math.random() * (maxX - minX)) + minX;
    const randomY = Math.floor(Math.random() * (maxY - minY)) + minY;

    noBtn.style.position = "absolute";
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

  // Hover shake is controlled by CSS

  // ---------- YES BUTTON ----------
  if (yesBtn) {
    yesBtn.addEventListener("click", () => {
      const music = new Audio("love.mp3");
      music.loop = true;
      music.play().catch(err => console.log("Autoplay blocked"));

      localStorage.setItem("playMusic", "true");

      setTimeout(() => {
        window.location.href = "yes.html";
      }, 50);
    });
  }

  // ---------- YES PAGE MUSIC ----------
  if (isYesPage && localStorage.getItem("playMusic") === "true") {
    yesSound.currentTime = 0;
    yesSound.play().catch(err => console.log("Autoplay blocked"));
    localStorage.removeItem("playMusic");
  }
});
