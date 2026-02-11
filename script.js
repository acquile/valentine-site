document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  // ❌ Remove redirect here — handled in HTML now
  // yesBtn.addEventListener("click", () => {
  //   window.location.href = "yes.html";
  // });

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
    void noBtn.offsetWidth;
    noBtn.classList.add("shake");
  }
});
