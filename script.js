document.addEventListener("DOMContentLoaded", () => {

  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const card = document.getElementById("mainCard");
  const music = document.getElementById("bgMusic");

  // 😈 Make NO button run away inside card boundaries
  noBtn.addEventListener("touchstart", moveButton);
  noBtn.addEventListener("mouseover", moveButton);

  function moveButton() {
    const maxX = card.clientWidth - noBtn.offsetWidth;
    const maxY = card.clientHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.right = "auto";
  }

  // 💕 YES button plays music and navigates to yes.html
  yesBtn.addEventListener("click", () => {
    music.play().catch(() => {});
    window.location.href = "yes.html";
  });

});
