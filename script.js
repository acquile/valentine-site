document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const music = document.getElementById("bgMusic");
  const card = document.getElementById("mainCard");

  // 😈 NO button moves anywhere in viewport and stays above the card/photo
  function moveButton() {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Card position
    const cardRect = card.getBoundingClientRect();

    // X: anywhere in viewport
    const minX = 0;
    const maxX = window.innerWidth - btnWidth;

    // Y: anywhere above the card bottom so it stays visible
    const minY = 0;
    const maxY = cardRect.bottom - btnHeight - 10; // 10px margin

    const randomX = Math.random() * (maxX - minX) + minX;
    const randomY = Math.random() * (maxY - minY) + minY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.right = "auto"; // reset right
  }

  // Event listeners
  noBtn.addEventListener("mouseover", moveButton);
  noBtn.addEventListener("touchstart", moveButton);

  // 💕 YES button plays music only on click
  yesBtn.addEventListener("click", () => {
    music.currentTime = 0;
    music.play().catch(() => {});
    window.location.href = "yes.html";
  });
});
