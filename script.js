document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const music = document.getElementById("bgMusic");

  // YES button
  yesBtn.addEventListener("click", () => {
    // Play music
    music.volume = 1;
    music.muted = false;
    music.loop = true;
    music.play().catch(err => console.log("Play failed:", err));

    // Remove the original card (includes NO button)
    const mainCard = document.getElementById("mainCard");
    mainCard.remove();

    // Create the "I love you" card
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

  // NO button dodging
  noBtn.addEventListener("mouseover", moveNoButton);
  noBtn.addEventListener("click", moveNoButton);

  function moveNoButton() {
    const card = document.getElementById("mainCard");
    if (!card) return; // stop if card is gone

    // Use stable button size to prevent resizing
    const btnWidth = this.offsetWidth;
    const btnHeight = this.offsetHeight;

    const cardRect = card.getBoundingClientRect();
    const padding = 10;

    const maxX = cardRect.width - btnWidth - padding;
    const maxY = cardRect.height - btnHeight - padding;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    this.style.position = "absolute";
    this.style.left = randomX + "px";
    this.style.top = randomY + "px";

    // Shake animation
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
