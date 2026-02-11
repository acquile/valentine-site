document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const card = document.getElementById("mainCard");
  const music = document.getElementById("bgMusic");

  // 😈 Make NO button run away above the card
  function moveButton() {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    const cardRect = card.getBoundingClientRect();

    // Random X anywhere in the window
    const randomX = Math.random() * (window.innerWidth - btnWidth);

    // Random Y above the card, not too high (min 10px)
    const randomY = Math.random() * Math.max(cardRect.top - btnHeight - 10, 10);

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
