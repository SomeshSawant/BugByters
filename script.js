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

// Attach logout click using event delegation
document.addEventListener('click', function(e) {
  // Check if the clicked element has class "settings-logout"
  if(e.target && e.target.classList.contains('settings-logout')){
    alert('Logging out...');
    window.location.href = 'index.html'; // Redirect to landing page
  }
});


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANzy2Fl54zbSLMMQtRP6uKEEsqMpFxk_c",
  authDomain: "campus-connect-27e8e.firebaseapp.com",
  projectId: "campus-connect-27e8e",
  storageBucket: "campus-connect-27e8e.firebasestorage.app",
  messagingSenderId: "1093775901397",
  appId: "1:1093775901397:web:943f9d7425a417d5a1d85c",
  measurementId: "G-VJYLCCP55E"
};

// Initialize Firebase app
const app = firebase.initializeApp(firebaseConfig);

// Firebase services
const auth = firebase.auth();
const db = firebase.firestore();

const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // prevent form default behavior

  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('signup-confirm-password').value;

  // Basic validations
  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill all fields.");
    return;
  }

  if (password.length <= 8) {
    alert("Password must be at least 8 characters.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  try {
    // Create user in Firebase Auth
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Store additional user info in Firestore
    await db.collection('users').doc(user.uid).set({
      name: name,
      email: email,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    alert("Signup successful!");
    signupForm.reset();
    window.location.href = "login.html"; // redirect to login page
  } catch (error) {
    alert(error.message);
  }
});
