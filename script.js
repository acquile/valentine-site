document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const card = document.getElementById("mainCard");
  const music = document.getElementById("bgMusic");

  // 😈 Make NO button run away inside card boundaries
  noBtn.addEventListener("mouseover", moveButton);
  noBtn.addEventListener("touchstart", moveButton);

  function moveButton() {
    const padding = 10; // keep button inside edges
    const noBtnWidth = noBtn.offsetWidth;
    const noBtnHeight = noBtn.offsetHeight;

    // Define vertical movement area: below photo, above bottom of card
    const photo = card.querySelector(".photo");
    const h1 = card.querySelector("h1");
    const minY = photo.offsetHeight + h1.offsetHeight + 20; // 20px padding
    const maxY = card.clientHeight - noBtnHeight - padding;

    // Horizontal movement: inside card
    const maxX = card.clientWidth - noBtnWidth - padding;

    const randomX = Math.random() * maxX + padding;
    const randomY = Math.random() * (maxY - minY) + minY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.right = "auto";
    noBtn.style.zIndex = 20; // always above photo
  }

  // 💕 YES button plays music only when clicked and navigates to yes.html
  yesBtn.addEventListener("click", () => {
    music.currentTime = 0;
    music.play().catch(() => {}); // play only when clicked
    window.location.href = "yes.html";
  });

  // Optional: prevent No button from being clicked
  noBtn.addEventListener("click", (e) => e.preventDefault());
});
