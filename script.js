document.addEventListener("DOMContentLoaded", () => {

  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const card = document.getElementById("mainCard");
  const music = document.getElementById("bgMusic");

  // 🎵 Play music on first tap (mobile safe)
  document.body.addEventListener("click", () => {
    music.play().catch(() => {});
  }, { once: true });

  // 😈 Make NO button run away
  noBtn.addEventListener("touchstart", moveButton);
  noBtn.addEventListener("mouseover", moveButton);

  function moveButton() {
    const cardRect = card.getBoundingClientRect();

    const maxX = cardRect.width - noBtn.offsetWidth - 20;
    const maxY = cardRect.height - noBtn.offsetHeight - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.right = "auto";
  }

  // 💕 YES button goes to next page
  yesBtn.addEventListener("click", () => {
    window.location.href = "yes.html";
  });

});
