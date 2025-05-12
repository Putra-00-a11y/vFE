const canvas = document.getElementById("particles-bg");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const colors = ["#ff0044", "#bb00ff", "#00ffcc"];

for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 1,
    color: colors[Math.floor(Math.random() * colors.length)],
    velocityX: Math.random() * 0.5 - 0.25,
    velocityY: Math.random() * 0.5 - 0.25
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();

    p.x += p.velocityX;
    p.y += p.velocityY;

    if (p.x < 0 || p.x > canvas.width) p.velocityX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.velocityY *= -1;
  });

  requestAnimationFrame(animate);
}

animate();

// © 2025 Putra - Unauthorized use is strictly prohibited.