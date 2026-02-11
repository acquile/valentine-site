document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const music = document.getElementById("bgMusic");

  // 😈 NO button moves anywhere in viewport and always visible
  function moveButton() {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const randomX = Math.random() * (window.innerWidth - btnWidth);
    const randomY = Math.random() * (window.innerHeight - btnHeight - 20); // not too close to bottom

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.right = "auto"; // reset right
  }

  noBtn.addEventListener("mouseover", moveButton);
  noBtn.addEventListener("touchstart", moveButton);

  // 💕 YES button plays music only on click
  yesBtn.addEventListener("click", () => {
    music.currentTime = 0;
    music.play().catch(() => {});
    window.location.href = "yes.html";
  });
});
