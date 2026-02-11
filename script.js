document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const music = document.getElementById("bgMusic"); // background music
  const noSound = new Audio("no.mp3"); // sound when No is clicked (optional)

  // ✅ Play music once on any user interaction (mobile autoplay)
  function playMusicOnce() {
    if (!music.played.length) {
      music.currentTime = 0;
      music.play().catch(() => console.log("Autoplay blocked"));
    }
    document.removeEventListener("click", playMusicOnce);
    document.removeEventListener("touchstart", playMusicOnce);
  }

  document.addEventListener("click", playMusicOnce);
  document.addEventListener("touchstart", playMusicOnce);

  // NO button dodge logic (desktop + mobile)
  document.addEventListener("mousemove", e => moveNoButton(e.clientX, e.clientY));
  document.addEventListener("touchmove", e => {
    if(e.touches.length > 0){
      const touch = e.touches[0];
      moveNoButton(touch.clientX, touch.clientY);
    }
  });

  function moveNoButton(x, y){
    const btnRect = noBtn.getBoundingClientRect();
    const offset = 100;
    const btnCenterX = btnRect.left + btnRect.width/2;
    const btnCenterY = btnRect.top + btnRect.height/2;
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

  // NO button click (plays sound but does NOT trigger Yes music)
  noBtn.addEventListener("click", e => {
    e.preventDefault(); // prevent accidental click
    noSound.currentTime = 0;
    noSound.play().catch(() => console.log("No sound blocked"));
  });

  // 💕 YES button: play music immediately and navigate to Yes page
  yesBtn.addEventListener("click", () => {
    music.currentTime = 0;
    music.play().catch(() => console.log("Autoplay blocked"));
    localStorage.setItem("playMusic", "true"); // flag to continue on Yes page
    setTimeout(() => {
      window.location.href = "yes.html";
    }, 50); // slight delay to ensure music starts
  });
});
