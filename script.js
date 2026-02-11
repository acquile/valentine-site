document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const sound = document.getElementById("yesSound");

  // ✅ YES = play sound then redirect
  yesBtn.addEventListener("click", () => {
    sound.currentTime = 0;
    sound.play();

    setTimeout(() => {
      window.location.href = "yes.html";
    }, 1500); // let music play first
  });

  // 😈 NO button runs away
  noBtn.addEventListener("mouseover", moveNoButton);
  noBtn.addEventListener("click", moveNoButton);

  function moveNoButton() {
    const card = document.querySelector(".card");
    const cardRect = card.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = cardRect.width - btnRect.width - 10;
    const maxY = cardRect.height - btnRect.height - 10;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    // 💥 Shake animation
    noBtn.classList.remove("shake");
    void noBtn.offsetWidth; // restart animation
    noBtn.classList.add("shake");
  }
});
