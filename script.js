const btn = document.getElementById("colorBtn");
const heading = document.getElementById("heading");

const colors = ["#e74c3c", "#2ecc71", "#9b59b6", "#f1c40f", "#2c3e50"];

btn.addEventListener("click", () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    heading.style.color = randomColor;
});
