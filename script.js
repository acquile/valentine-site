document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const yesSound = document.getElementById("yesSound");
  const isYesPage = !!yesSound; // true if on yes.html

  // ---------- NO BUTTON ----------
  function dodgeNoButton() {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const margin = 20; // keep button visible
    const maxX = window.innerWidth - btnWidth - margin;
    const maxY = window.innerHeight - btnHeight - margin;
    const minX = margin;
    const minY = margin;

    const randomX = Math.floor(Math.random() * (maxX - minX)) + minX;
    const randomY = Math.floor(Math.random() * (maxY - minY)) + minY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    // Stop shaking if not hovered
    if (!noBtn.matches(":hover")) {
      noBtn.style.animation = "none";
    }
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

  // ---------- YES BUTTON ----------
  if (yesBtn) {
    yesBtn.addEventListener("click", () => {
      // Only set flag for Yes page music
      localStorage.setItem("playMusic", "true");

      // Navigate to Yes page
      setTimeout(() => {
        window.location.href = "yes.html";
      }, 50);
    });
  }

  // ---------- YES PAGE MUSIC ----------
  if (isYesPage && localStorage.getItem("playMusic") === "true") {
    // Play music only on Yes page
    yesSound.currentTime = 0;
    yesSound.play().catch(err => console.log("Autoplay blocked on Safari/iOS"));
    localStorage.removeItem("playMusic"); // reset flag
  }
});
