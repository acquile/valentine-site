document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const yesSound = document.getElementById("yesSound"); // on Yes page
  const isYesPage = !!yesSound; // true if we are on Yes page

  // ---------- NO BUTTON ----------
  // Function to dodge No button randomly
  function dodgeNoButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${randomX - noBtn.offsetLeft}px, ${randomY - noBtn.offsetTop}px)`;
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

  // Optional: hover shake (desktop only)
  if (noBtn) {
    noBtn.addEventListener("mouseenter", () => {
      noBtn.classList.add("shake");
    });
    noBtn.addEventListener("mouseleave", () => {
      noBtn.classList.remove("shake");
    });
  }

  // ---------- YES BUTTON ----------
  if (yesBtn) {
    yesBtn.addEventListener("click", () => {
      // Play music immediately on index (if desired)
      const music = new Audio("love.mp3");
      music.loop = true;
      music.currentTime = 0;
      music.play().catch(err => console.log("Autoplay blocked:", err));

      // Set flag to continue music on Yes page
      localStorage.setItem("playMusic", "true");

      // Navigate to Yes page
      setTimeout(() => {
        window.location.href = "yes.html";
      }, 50);
    });
  }

  // ---------- YES PAGE MUSIC ----------
  if (isYesPage && localStorage.getItem("playMusic") === "true") {
    yesSound.currentTime = 0;
    yesSound.play().catch(err => console.log("Autoplay blocked:", err));

    // Clear flag so it doesn't restart if Yes page is reloaded
    localStorage.removeItem("playMusic");
  }
});
