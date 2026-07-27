const SPARKLE_COUNT = 30;
const sparkles = [];
let sparkleindex = 0;
let lastSpawn = 0;

for (let i = 0; i < SPARKLE_COUNT; i++) {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.opacity = "0";
  sparkle.style.pointerEvents = "none";
  sparkle.style.animation = "none";

  sparkle.addEventListener("animationend", () => {
    sparkle.style.opacity = "0";
  });

  document.documentElement.appendChild(sparkle);
  sparkles.push(sparkle);
}

document.addEventListener("mousemove", (e) => {
  const now = Date.now();
  if (now - lastSpawn < 50) return;
  lastSpawn = now;

  const sparkle = sparkles[sparkleindex];
  sparkleindex = (sparkleindex + 1) % SPARKLE_COUNT;

  sparkle.style.left = `${e.clientX}px`;
  sparkle.style.top = `${e.clientY}px`;
  sparkle.style.opacity = "1";
  sparkle.style.animation = "none";
  sparkle.offsetHeight;
  sparkle.style.animation = "";
});
