document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const card = document.getElementById("mainCard");
  const music = document.getElementById("bgMusic");

  // 😈 Move NO button randomly but not too low
  function moveButton() {
    const padding = 10; // keep inside edges
    const maxX = card.clientWidth - noBtn.offsetWidth - padding;
    const maxY = card.clientHeight * 0.6 - noBtn.offsetHeight; // only move in top 60% of card

    const randomX = Math.random() * maxX + padding;
    const randomY = Math.random() * maxY + padding;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.right = "auto";
    noBtn.style.zIndex = 20; // keep above photo
  }

  noBtn.addEventListener("mouseover", moveButton);
  noBtn.addEventListener("touchstart", moveButton);
  noBtn.addEventListener("click", (e) => e.preventDefault());

  // 💕 YES button
  yesBtn.addEventListener("click", () => {
    music.currentTime = 0;
    music.play().catch(() => {});
    localStorage.setItem("musicPlaying", "true");
    window.location.href = "yes.html";
  });

  // ✅ Continue music if already playing
  if (localStorage.getItem("musicPlaying") === "true") {
    music.currentTime = 0;
    music.play().catch(() => {});
  }

  // ✅ Start music on first user interaction (for autoplay restrictions)
  function startMusic() {
    music.currentTime = 0;
    music.play().catch(() => {});
    document.removeEventListener("click", startMusic);
    document.removeEventListener("touchstart", startMusic);
  }

  document.addEventListener("click", startMusic);
  document.addEventListener("touchstart", startMusic);
});
