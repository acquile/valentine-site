document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const music = document.getElementById("bgMusic");

  // ✅ Desktop: dodge with mouse
  document.addEventListener("mousemove", e => {
    moveNoButton(e.clientX, e.clientY);
  });

  // ✅ Mobile: dodge with touch
  document.addEventListener("touchmove", e => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      const btnRect = noBtn.getBoundingClientRect();

      // Only dodge if the touch is NOT inside the button
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
    const offset = 100; // distance from cursor/finger before moving
    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;

    const dx = x - btnCenterX;
    const dy = y - btnCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < offset) {
      const moveX = -dx / distance * 80; // horizontal push
      const moveY = -dy / distance * 40; // vertical push
      noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
    } else {
      noBtn.style.transform = "translate(0, 0)";
    }
  }

  // Prevent accidental click on No button
  noBtn.addEventListener("click", e => e.preventDefault());

  // Yes button plays music and navigates
  yesBtn.addEventListener("click", () => {
    localStorage.setItem("playMusic", "true");
    window.location.href = "yes.html";
  });
});
