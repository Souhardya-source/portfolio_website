// Typing Effect
const typingText = document.getElementById("typing-text");
const words = ["a CSE Student", "a Tech Enthusiast", "a Graphic Designer", "a Problem Solver" , "a Creative Thinker" , "an Aspiring Software Engineer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  typingText.textContent = currentChar;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", type);

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY <= 10) {
    // If near the top of the page, show the header again
    header.style.top = "0";
  } else {
    // Otherwise, hide it
    header.style.top = "-100px";
  }
});

// Back to Top Button
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// === Sparkle Trail ===
function createSparkle(x, y) {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;
  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 600); // Matches sparkleFade animation duration in CSS
}

document.addEventListener("mousemove", (e) => {
  createSparkle(e.clientX, e.clientY);
});
