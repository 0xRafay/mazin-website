let lastSpawn = 0;

document.addEventListener("mousemove", (e) => {
  // only spawn a sparkle every 50ms to prevent lag
  const now = Date.now();
  if (now - lastSpawn < 50) return;
  lastSpawn = now;

  // literally just creates a bunch of divs with the element style .sparkle
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = `${e.clientX}px`;
  sparkle.style.top = `${e.clientY}px`;

  document.body.appendChild(sparkle);

  // remove the element from the DOM after the animation finishes
  setTimeout(() => sparkle.remove(), 600);
});
