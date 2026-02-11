document.addEventListener("DOMContentLoaded", () => {

  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const card = document.getElementById("mainCard");
  const music = document.getElementById("bgMusic");

  // 😈 Make NO button run away inside card boundaries
  function moveButton() {
    const maxX = card.clientWidth - noBtn.offsetWidth;
    const maxY = card.clientHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.right = "auto"; // clear right to avoid conflicts
  }

  // Trigger move on hover and touch
  noBtn.addEventListener("mouseover", moveButton);
  noBtn.addEventListener("touchstart", moveButton);

  // Prevent No button from being clicked
  noBtn.addEventListener("click", (e) => {
    e.preventDefault();
  });

  // 💕 YES button plays music and navigates to yes.html
  yesBtn.addEventListener("click", () => {
    music.currentTime = 0;
    music.play().catch(() => {});

    // Slight delay to ensure audio plays
    setTimeout(() => {
      window.location.href = "yes.html";
    }, 200);
  });

});
