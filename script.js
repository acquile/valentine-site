document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const card = document.getElementById("mainCard");
  const music = document.getElementById("bgMusic");

  // ✅ Ensure No button stays visible inside card
  function moveButton() {
    const padding = 10; // keep button inside edges
    const maxX = card.clientWidth - noBtn.offsetWidth - padding;
    const maxY = card.clientHeight - noBtn.offsetHeight - padding;

    const randomX = Math.random() * maxX + padding;
    const randomY = Math.random() * maxY + padding;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.right = "auto";
    noBtn.style.zIndex = 20; // above photo
  }

  noBtn.addEventListener("mouseover", moveButton);
  noBtn.addEventListener("touchstart", moveButton);
  noBtn.addEventListener("click", (e) => e.preventDefault());

  // ✅ Play music only after user interaction
  function startMusic() {
    music.currentTime = 0;
    music.play().catch(() => {
      console.log("Autoplay blocked, waiting for user interaction");
    });
    // remove the listener after first interaction
    document.removeEventListener("click", startMusic);
    document.removeEventListener("touchstart", startMusic);
  }

  document.addEventListener("click", startMusic);
  document.addEventListener("touchstart", startMusic);

  // 💕 YES button
  yesBtn.addEventListener("click", () => {
    // Play music immediately if not already
    music.currentTime = 0;
    music.play().catch(() => {});

    // Save flag to continue music on yes.html
    localStorage.setItem("musicPlaying", "true");

    // Navigate to yes.html
    window.location.href = "yes.html";
  });

  // ✅ Continue music if already playing
  if (localStorage.getItem("musicPlaying") === "true") {
    music.currentTime = 0;
    music.play().catch(() => {}); // may fail if no user interaction yet
  }
});
