document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const yesSound = document.getElementById("yesSound"); // exists only on yes.html

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

 // ---------- YES BUTTON ----------
if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    const bgMusic = document.getElementById("bgMusic");

    if (bgMusic) {
      bgMusic.play().then(() => {

        // Save playback position
        sessionStorage.setItem("musicTime", bgMusic.currentTime);
        sessionStorage.setItem("musicPlaying", "true");

        // Smooth fade out
        document.body.style.transition = "opacity 0.6s ease";
        document.body.style.opacity = "0";

        setTimeout(() => {
          window.location.href = "yes.html";
        }, 600);

      }).catch(err => console.log("Playback failed:", err));
    }
  });
}

// ---------- YES PAGE MUSIC ----------
if (yesSound && sessionStorage.getItem("musicPlaying") === "true") {

  const savedTime = sessionStorage.getItem("musicTime");

  if (savedTime) {
    yesSound.currentTime = parseFloat(savedTime);
  }

  yesSound.play().catch(err => console.log("Mobile blocked:", err));

  // Fade in effect
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.6s ease";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 50);
}

});
