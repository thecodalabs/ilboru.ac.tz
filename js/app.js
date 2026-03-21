toggleBtn = document.getElementById("Toggle-icon");
ToggleButton = document.getElementById("Toggle-button");

ToggleButton.addEventListener("click", () => {
  if (toggleBtn.classList.contains("fa-bars")) {
    toggleBtn.classList.replace("fa-bars", "fa-times");
  } else {
    toggleBtn.classList.replace("fa-times", "fa-bars");
  }
});

// animation

document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    threshold: 0.15, // Triggers when 15% of the element is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // Optional: stop observing after it reveals once
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const rows = document.querySelectorAll(".reveal");
  rows.forEach((row) => observer.observe(row));
});
