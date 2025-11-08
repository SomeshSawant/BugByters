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
// Firebase Configuration and Initialization
  // Import the functions you need from the SDKs you need
  // import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
  // // TODO: Add SDKs for Firebase products that you want to use
  // // https://firebase.google.com/docs/web/setup#available-libraries

  // // Your web app's Firebase configuration
  // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // const firebaseConfig = {
  //   apiKey: "AIzaSyDMWgsbBQw0I7h_Hnx1ZFkel7hBlWLbGC4",
  //   authDomain: "campus-connect-5674c.firebaseapp.com",
  //   projectId: "campus-connect-5674c",
  //   storageBucket: "campus-connect-5674c.firebasestorage.app",
  //   messagingSenderId: "1065784810799",
  //   appId: "1:1065784810799:web:f88316aa0160b1092495da",
  //   measurementId: "G-HHHZR9R7CJ"
  // };

  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

// Attach logout click using event delegation
document.addEventListener('click', function(e) {
  // Check if the clicked element has class "settings-logout"
  if(e.target && e.target.classList.contains('settings-logout')){
    alert('Logging out...');
    window.location.href = 'index.html'; // Redirect to landing page
  }
});
