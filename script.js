// Environmental Facts
const facts = [
  "Recycling one aluminum can saves enough energy to power a TV for 3 hours.",
  "Around 27,000 trees are cut down each day just to make toilet paper.",
  "By 2050, there could be more plastic than fish in the ocean.",
  "One large tree can supply a day's oxygen for four people.",
  "Renewable energy sources like wind and solar are growing faster than any other energy source."
];

function showFact() {
  const factBox = document.getElementById("fact-box");
  if (factBox) {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factBox.textContent = randomFact;
  }
}

// Quiz Logic
let correctAnswers = 0;
function checkAnswer(button, isCorrect) {
  if (isCorrect) {
    button.style.background = "green";
    button.style.color = "white";
    correctAnswers++;
  } else {
    button.style.background = "red";
    button.style.color = "white";
  }
  button.disabled = true;

  if (correctAnswers === 2) {
    const badge = document.getElementById("badge");
    if (badge) badge.style.display = "inline-block";
  }
}

// Leaderboard Mock Data
const students = [
  { name: "Aryan", points: 120 },
  { name: "Arpit", points: 110 },
  { name: "Anjaleena", points: 105 },
  { name: "Deepa", points: 105 },
  { name: "Ankita", points: 100 },
  { name: "Avesh", points: 90 }
];

function loadLeaderboard() {
  const tbody = document.getElementById("leaderboard-body");
  if (tbody) {
    students.sort((a, b) => b.points - a.points);
    tbody.innerHTML = "";
    students.forEach((s, index) => {
      const row = `<tr>
        <td>${index + 1}</td>
        <td>${s.name}</td>
        <td>${s.points}</td>
      </tr>`;
      tbody.innerHTML += row;
    });
  }
}
document.addEventListener("DOMContentLoaded", loadLeaderboard);
// Toggle Login / Signup
function showForm(type) {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const loginTab = document.getElementById("login-tab");
  const signupTab = document.getElementById("signup-tab");

  if (type === "login") {
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
  } else {
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
  }
}
// save after sign-up
function signupSubmit(name, email) {
  const user = { name, email, points: 0 };
  localStorage.setItem('ecolearn_user', JSON.stringify(user));
  // redirect to home
  window.location.href = 'index.html';
}

// read on pages
function getCurrentUser() {
  return JSON.parse(localStorage.getItem('ecolearn_user') || 'null');
}
