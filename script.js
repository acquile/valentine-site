document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const music = document.getElementById("bgMusic");

  // ✅ No button slides left/right on hover and shakes infinitely
  let moveRight = true;
  const slideDistance = 100; // px
  const originalRight = parseInt(window.getComputedStyle(noBtn).right, 10);

  function slideButton() {
    if (moveRight) {
      noBtn.style.right = (originalRight + slideDistance) + "px";
    } else {
      noBtn.style.right = originalRight + "px";
    }
    moveRight = !moveRight;
  }

  noBtn.addEventListener("mouseover", slideButton);
  noBtn.addEventListener("touchstart", slideButton);
  noBtn.addEventListener("click", (e) => e.preventDefault()); // prevent accidental click

  // 💕 YES button plays music instantly and navigates
  yesBtn.addEventListener("click", () => {
    music.currentTime = 0;
    music.play().catch(() => {}); // play immediately on click
    window.location.href = "yes.html";
  });
});
