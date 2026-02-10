const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseenter", () => {
  const x = Math.floor(Math.random() * 200) - 100;
  const y = Math.floor(Math.random() * 100) - 50;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

document.getElementById("yesBtn").addEventListener("click", function () {
  window.location.href = "yes.html";
});

