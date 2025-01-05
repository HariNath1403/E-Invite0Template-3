/*
window.onload = function () {
  // Hide the spinner
  document.getElementById("loading-spinner").style.display = "none";

  // Show the main content
  document.getElementById("box").style.display = "block";
};
*/

// Countdown
// Set the target date and time
const targetDate = new Date("2026-01-10T23:59:59").getTime();

// Update the countdown every second
const timer = setInterval(() => {
  const now = new Date().getTime();
  const difference = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Update the HTML
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // Stop the countdown when the target date is reached
  if (difference < 0) {
    clearInterval(timer);
    document.getElementById("days").textContent = "0";
    document.getElementById("hours").textContent = "0";
    document.getElementById("minutes").textContent = "0";
    document.getElementById("seconds").textContent = "0";
  }
}, 1000);

// Nav
const navBtn = document.getElementById("navBtn");
const navPage = document.getElementById("navPage");
const navLinks = document.querySelectorAll(".nav-page__list a");
const body = document.body;

const toggleNav = () => {
  navBtn.classList.toggle("is-active");
  navPage.classList.toggle("is-active");

  // Disable/enable scrolling on body
  if (navPage.classList.contains("is-active")) {
    body.classList.add("no-scroll");
  } else {
    body.classList.remove("no-scroll");
  }
};

// Event listener for the button click
navBtn.addEventListener("click", toggleNav);

// Event listener for each link click
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Close the navigation and re-enable scrolling
    if (navPage.classList.contains("is-active")) {
      toggleNav();
    }
  });
});
