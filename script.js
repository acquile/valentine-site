document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const yesSound = document.getElementById("yesSound");
  const isYesPage = !!yesSound;

  // ---------- NO BUTTON ----------
  function dodgeNoButton() {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // margins to keep visible
    const margin = 20;
    const maxX = window.innerWidth - btnWidth - margin;
    const maxY = window.innerHeight - btnHeight - margin;
    const minX = margin;
    const minY = margin;

    // random position
    const randomX = Math.floor(Math.random() * (maxX - minX)) + minX;
    const randomY = Math.floor(Math.random() * (maxY - minY)) + minY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    // Remove shake class if not hovered
    if (!noBtn.matches(":hover")) {
      noBtn.style.animation = "none";
    }
  }

  if (noBtn) {
    // Click dodge
    noBtn.addEventListener("click", e => {
      e.preventDefault();
      dodgeNoButton();
    });

    // Mobile touch dodge
    noBtn.addEventListener("touchstart", e => {
      e.preventDefault();
      dodgeNoButton();
    });

    // Add shake on hover
    noBtn.addEventListener("mouseenter", () => {
      noBtn.style.animation = "shake 0.5s infinite";
    });

    // Remove shake when not hovering
    noBtn.addEventListener("mouseleave", () => {
      noBtn.style.animation = "none";
    });
  }

  // ---------- YES BUTTON ----------
  if (yesBtn) {
    yesBtn.addEventListener("click", () => {
      // Safari mobile requires user gesture for audio
      const music = new Audio("love.mp3");
      music.loop = true;
      music.play().catch(err => console.log("Safari/iOS requires user gesture"));

      // Set flag for yes page
      localStorage.setItem("playMusic", "true");

      // Navigate after a short delay
      setTimeout(() => {
        window.location.href = "yes.html";
      }, 50);
    });
  }

  // ---------- YES PAGE MUSIC ----------
  if (isYesPage && localStorage.getItem("playMusic") === "true") {
    // Play music on Yes page if user clicked Yes
    yesSound.currentTime = 0;
    yesSound.play().catch(err => console.log("Safari/iOS requires user gesture"));

    // Remove flag so it doesn't auto-play next time
    localStorage.removeItem("playMusic");
  }
});
