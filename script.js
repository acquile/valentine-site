document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const music = document.getElementById("bgMusic");

  // ✅ YES button
  yesBtn.addEventListener("click", () => {
    music.volume = 1;
    music.muted = false;

    music.play().catch(err => console.log("Play failed:", err));

    // Hide first card
    document.getElementById("mainCard").style.display = "none";

    // Create new card safely (no innerHTML rewrite!)
    const newCard = document.createElement("div");
    newCard.className = "card";

    newCard.innerHTML = `
      <img src="yes.jfif" alt="Us kissing" class="photo" />
      <h1>I love you so much! 💖</h1>
      <p>You’re my forever Valentine 💕</p>
    `;

    document.body.appendChild(newCard);

    startHearts();
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
  }

  // 💖 Floating hearts
  function startHearts() {
    setInterval(() => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "💗";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 7000);
    }, 400);
  }
});
