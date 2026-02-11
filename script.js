document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const music = document.getElementById("bgMusic");

  // ✅ No button dodges the cursor and shakes on hover
  document.addEventListener("mousemove", (e) => {
    const btnRect = noBtn.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const offset = 100; // distance from cursor before button moves
    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;
    const dx = mouseX - btnCenterX;
    const dy = mouseY - btnCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < offset) {
      // move button away from cursor
      const moveX = -dx / distance * 80; // horizontal push
      const moveY = -dy / distance * 40; // vertical push
      noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
    } else {
      noBtn.style.transform = `translate(0, 0)`; // reset
    }
  });

  // Prevent accidental clicks on No button
  noBtn.addEventListener("click", (e) => e.preventDefault());

  // 💕 YES button plays music and navigates
  yesBtn.addEventListener("click", () => {
    // Save that music should play on Yes page
    localStorage.setItem("playMusic", "true");

    // Navigate to Yes page
    window.location.href = "yes.html";
  });
});
