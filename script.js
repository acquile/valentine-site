document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const music = document.getElementById("bgMusic");

  // YES button click handler
  yesBtn.addEventListener("click", () => {
    // Play music
    music.volume = 1;
    music.muted = false;
    music.loop = true;
    music.play().catch(err => console.log("Play failed:", err));

    // Remove the original card (includes NO button)
    const mainCard = document.getElementById("mainCard");
    if (mainCard) mainCard.remove();

    // Create the "I love you" card
    const newCard = document.createElement("div");
    newCard.className = "card";

    newCard.innerHTML = `
      <img src="yes.jfif" alt="Us kissing" class="photo" />
      <h1>I love you so much! 💖</h1>
      <p>You’re my forever Valentine 💕</p>
    `;

    document.body.appendChild(newCard);

    // Start floating hearts animation
    startHearts();
  });

  // NO button dodging on hover and click
  noBtn.addEventListener("mouseover", (event) => moveNoButton(event.target));
  noBtn.addEventListener("click", (event) => moveNoButton(event.target));

  function moveNoButton(button) {
    const card = document.getElementById("mainCard");
    if (!card) return; // Stop if card is gone (after YES clicked)

    const btnWidth = button.offsetWidth;
    const btnHeight = button.offsetHeight;

    const cardRect = card.getBoundingClientRect();
    const padding = 10;

    // Calculate max left/top within card boundaries minus padding and button size
    const maxX = cardRect.width - btnWidth - padding;
    const maxY = cardRect.height - btnHeight - padding;

    // Random position inside card boundaries
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Set fixed size explicitly to prevent resizing flicker
    button.style.width = btnWidth + "px";
    button.style.height = btnHeight + "px";

    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";

    // Restart shake animation for fun
    button.classList.remove("shake");
    void button.offsetWidth; // Trigger reflow for restart
    button.classList.add("shake");
  }

  // Floating hearts animation
  function startHearts() {
    setInterval(() => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "💗";

      // Random horizontal position across viewport width
      heart.style.left = Math.random() * 100 + "vw";

      // Random font size from 16px to 40px
      const size = Math.random() * 24 + 16;
      heart.style.fontSize = size + "px";

      // Random animation duration between 4s and 7s
      heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

      // Slightly random opacity for subtle effect
      heart.style.opacity = (Math.random() * 0.5 + 0.5).toString();

      document.body.appendChild(heart);

      // Remove heart after animation completes (7 seconds)
      setTimeout(() => heart.remove(), 7000);
    }, 400);
  }
});
