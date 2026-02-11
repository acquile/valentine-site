document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");

  // Function to move the No button randomly
  function dodgeNoButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20; // prevent going offscreen
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;
    
    // Random position within screen bounds
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.transition = "transform 0.3s ease"; // smooth movement
    noBtn.style.transform = `translate(${randomX - noBtn.offsetLeft}px, ${randomY - noBtn.offsetTop}px)`;
  }

  // NO button click - dodges randomly
  noBtn.addEventListener("click", e => {
    e.preventDefault();
    dodgeNoButton();
  });

  // Also allow mobile touch
  noBtn.addEventListener("touchstart", e => {
    e.preventDefault();
    dodgeNoButton();
  });

  // 💕 YES button: navigate to Yes page and start music there
  yesBtn.addEventListener("click", () => {
    localStorage.setItem("playMusic", "true"); // flag to start music on Yes page
    setTimeout(() => {
      window.location.href = "yes.html";
    }, 50);
  });
});
