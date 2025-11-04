// Smooth scroll navigation
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Scroll to tools button
document.getElementById("exploreBtn").addEventListener("click", () => {
  document.getElementById("tools").scrollIntoView({ behavior: "smooth" });
});

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent successfully 🚀");
  e.target.reset();
});
