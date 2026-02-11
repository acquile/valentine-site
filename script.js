document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const music = document.getElementById("bgMusic");

  // Play music once after any user interaction
  function playMusicOnce() {
    if (!music.played.length) { // play only once
      music.currentTime = 0;
      music.play().catch(() => console.log("Autoplay blocked"));
    }
    // Remove listener after first interaction
    document.removeEventListener("click", playMusicOnce);
    document.removeEventListener("touchstart", playMusicOnce);
  }

  document.addEventListener("click", playMusicOnce);
  document.addEventListener("touchstart", playMusicOnce);

  // NO button dodge logic (desktop + mobile)
  document.addEventListener("mousemove", e => moveNoButton(e.clientX, e.clientY));
  document.addEventListener("touchmove", e => {
    if(e.touches.length > 0) {
      const touch = e.touches[0];
      const btnRect = noBtn.getBoundingClientRect();
      if (
        touch.clientX < btnRect.left ||
        touch.clientX > btnRect.right ||
        touch.clientY < btnRect.top ||
        touch.clientY > btnRect.bottom
      ) {
        moveNoButton(touch.clientX, touch.clientY);
      }
    }
  });

  function moveNoButton(x, y) {
    const btnRect = noBtn.getBoundingClientRect();
    const offset = 100;
    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;
    const dx = x - btnCenterX;
    const dy = y - btnCenterY;
    const distance = Math.sqrt(dx*dx + dy*dy);

    if(distance < offset){
      const moveX = -dx/distance * 80;
      const moveY = -dy/distance * 40;
      noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
    } else {
      noBtn.style.transform = "translate(0,0)";
    }
  }

  noBtn.addEventListener("click", e => e.preventDefault());

  // YES button plays music immediately and navigates
  yesBtn.addEventListener("click", () => {
    music.currentTime = 0;
    music.play().catch(() => console.log("Autoplay blocked"));
    localStorage.setItem("playMusic", "true");
    window.location.href = "yes.html";
  });
});
