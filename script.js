document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const card = document.getElementById("mainCard");
  const music = document.getElementById("bgMusic");

  // 💖 Ensure music continues across pages
  if (localStorage.getItem("musicPlaying") === "true") {
    music.currentTime = 0;
    music.play().catch(() => {});
  }

  // 😈 NO button movement inside card
  function moveButton() {
    const padding = 10; // keep button inside edges
    const maxX = card.clientWidth - noBtn.offsetWidth - padding;
    const maxY = card.clientHeight - noBtn.offsetHeight - padding;

    const randomX = Math.random() * maxX + padding;
    const randomY = Math.random() * maxY + padding;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.right = "auto";
    noBtn.style.zIndex = 20; // stay above photo
  }

  noBtn.addEventListener("mouseover", moveButton);
  noBtn.addEventListener("touchstart", moveButton);

  // Prevent clicking No
  noBtn.addEventListener("click", (e) => e.preventDefault());

  // 💕 YES button
  yesBtn.addEventListener("click", () => {
    // mark music as playing
    localStorage.setItem("musicPlaying", "true");

    music.currentTime = 0;
    music.play().catch(() => {});

    // Navigate immediately to yes page
    window.location.href = "yes.html";
  });
});
