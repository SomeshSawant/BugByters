// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navBtns = document.querySelector(".nav-btns");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  navBtns.classList.toggle("active");
});

// Smooth scroll to login/signup forms
document.querySelectorAll('.switch-auth a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetForm = document.getElementById(targetId);
    targetForm.scrollIntoView({ behavior: 'smooth' });
  });
});
