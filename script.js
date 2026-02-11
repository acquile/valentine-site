document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const yesSound = document.getElementById("yesSound");
  const isYesPage = !!yesSound;

  // ---------- NO BUTTON ----------
  function dodgeNoButton() {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Margins to keep button fully visible
    const margin = 20;

    const maxX = window.innerWidth - btnWidth - margin;
    const maxY = window.innerHeight - btnHeight - margin;
    const minX = margin;
    const minY = margin;

    // Random position inside visible viewport
    const randomX = Math.floor(Math.random() * (maxX - minX)) + minX;
    const randomY = Math.floor(Math.random() * (maxY - minY)) + minY;

    // Move button
    noBtn.style.position = "fixed"; // use fixed so it's relative to viewport
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
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
  }

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
