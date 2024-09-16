let number = document.getElementById("number");
let circle = document.getElementById("circle");

let counter = 0;
let targetPercent = 70; // Target percentage (you can make this dynamic)
let intervalDuration = 30; // How fast the counter updates
let circumference = 440; // Circumference of the circle (used for stroke-dashoffset)

// Calculate offset based on percentage
function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

// Create an interval to update the percentage and progress bar
let interval = setInterval(() => {
  if (counter >= targetPercent) {
    clearInterval(interval); // Stop when we hit the target
  } else {
    counter += 1; // Increment progress
    number.innerHTML = counter + "%"; // Update displayed number
    setProgress(counter); // Update the stroke offset
  }
}, intervalDuration);
