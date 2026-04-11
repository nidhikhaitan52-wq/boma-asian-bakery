// Show alert when contact form is submitted
function handleFormSubmit(event) {
  event.preventDefault(); // stop page reload

  alert("Thank you! Your message has been sent. We will contact you soon.");

  // clear form after submit
  event.target.reset();
}


// Smooth scroll (if you add anchors later)
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}


// Add hover effect message (optional interaction)
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "none";
    });
  });
});