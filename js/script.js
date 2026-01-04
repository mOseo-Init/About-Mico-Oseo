// Initialize AOS animations
AOS.init();

// Typed.js effect (optional, if you include typed.js library)
document.addEventListener("DOMContentLoaded", function() {
  const typedElement = document.getElementById("typed");
  if (typedElement) {
    let words = ["Mico", "a Computer Engineering Student", "a Full-stack Developer", "a Hardware Innovator"];
    let i = 0;
    setInterval(() => {
      typedElement.textContent = words[i];
      i = (i + 1) % words.length;
    }, 2000);
  }
});
