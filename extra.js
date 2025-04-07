// Dark/Light mode toggle
document.getElementById('theme-toggle')?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Navbar sticky
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  header?.classList.toggle("sticky", window.scrollY > 0);
});

// AOS init (scroll animations)
document.addEventListener("DOMContentLoaded", function() {
  if (AOS) AOS.init();
});

// Form validation
document.querySelector("form")?.addEventListener("submit", function(e) {
  const inputs = this.querySelectorAll("input[required]");
  let valid = true;
  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.style.border = "2px solid red";
      valid = false;
    } else {
      input.style.border = "1px solid #ccc";
    }
  });
  if (!valid) e.preventDefault();
});
