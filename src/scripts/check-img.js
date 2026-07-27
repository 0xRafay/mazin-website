const bgImage = document.querySelector(".background-container");

if (bgImage.complete) {
  // Image is already cached and loaded
  bgImage.classList.add("loaded");
} else {
  // Image is still loading, wait for it
  bgImage.addEventListener("load", () => {
    bgImage.classList.add("loaded");
  });
}
