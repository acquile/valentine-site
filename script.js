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
    const audio = new Audio("love.mp3");
    audio.play().then(() => {
      setTimeout(() => {
        window.location.href = "yes.html";
      }, 500); // small delay so music starts first
    }).catch(err => console.log("Playback failed:", err));
  });
}


  // ---------- YES PAGE MUSIC ----------
  if (yesSound && localStorage.getItem("playMusic") === "true") {
    yesSound.currentTime = 0;
    yesSound.play().catch(err => console.log("Mobile blocked:", err));
    localStorage.removeItem("playMusic"); // cleanup
  }
});
