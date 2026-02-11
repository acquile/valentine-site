document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const music = document.getElementById("bgMusic");

  // YES button
  yesBtn.addEventListener("click", () => {
    // Ensure audio is ready
    music.loop = true;
    music.volume = 1;
    music.muted = false;

    // Play music on click (user interaction satisfies Chrome autoplay rules)
    music.play().catch(err => console.log("Play failed:", err));

    // Hide the first card
    const mainCard = document.getElementById("mainCard");
    mainCard.style.display = "none";

    // Create the "I love you" card safely
    const newCard = document.createElement("div");
    newCard.className = "card";

    newCard.innerHTML = `
      <img src="yes.jfif" alt="Us kissing" class="photo" />
      <h1>I love you so much! 💖</h1>
      <p>You’re my forever Valentine 💕</p>
    `;

    document.body.appendChild(newCard);

    // Start floating hearts
    startHearts();
  });

  // NO button runs away
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
