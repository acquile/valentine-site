document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const music = document.getElementById("bgMusic");

  // YES button
  yesBtn.addEventListener("click", () => {
    music.volume = 1;
    music.muted = false;
    music.loop = true;

    // Play music on first click
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
      <div class="buttons">
        <button id="noBtn" class="no">No 😅</button>
      </div>
    `;

    document.body.appendChild(newCard);

    // Update noBtn reference for new card
    const newNoBtn = newCard.querySelector("#noBtn");
    if (newNoBtn) {
      newNoBtn.addEventListener("mouseover", moveNoButton);
      newNoBtn.addEventListener("click", moveNoButton);
    }

    // Start floating hearts
    startHearts();
  });

  // NO button dodging
  noBtn.addEventListener("mouseover", moveNoButton);
  noBtn.addEventListener("click", moveNoButton);

  function moveNoButton() {
    // Use the currently visible card
    const card = document.getElementById("mainCard") || document.querySelector(".card:last-child");
    const cardRect = card.getBoundingClientRect();
    const btnRect = this.getBoundingClientRect();

    const padding = 10; // avoid edges
    const maxX = cardRect.width - btnRect.width - padding;
    const maxY = cardRect.height - btnRect.height - padding;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    this.style.position = "absolute";
    this.style.left = randomX + "px";
    this.style.top = randomY + "px";

    // Optional shake animation
    this.classList.remove("shake");
    void this.offsetWidth;
    this.classList.add("shake");
  }

  // Floating hearts behind the card
  function startHearts() {
    setInterval(() => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "💗";

      // Random horizontal position
      heart.style.left = Math.random() * 100 + "vw";

      // Random size
      const size = Math.random() * 24 + 16; // 16px to 40px
      heart.style.fontSize = size + "px";

      // Random animation duration
      heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

      // Slight transparency
      heart.style.opacity = (Math.random() * 0.5 + 0.5);

      document.body.appendChild(heart);

      // Remove after animation
      setTimeout(() => heart.remove(), 7000);
    }, 400);
  }
});
