 // Get DOM elements
const clockElement = document.getElementById('clock');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const themeBtn = document.getElementById('themeBtn');

let intervalId;
let isRunning = false;

// Function to update the clock
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Start the clock
startBtn.addEventListener('click', () => {
  if (!isRunning) {
    updateClock(); // Update immediately
    intervalId = setInterval(updateClock, 1000); // Update every second
    isRunning = true;
  }
});

// Stop the clock
stopBtn.addEventListener('click', () => {
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
  }
});

// Reset the clock
resetBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  clockElement.textContent = '00:00:00';
  isRunning = false;
});

// Change theme
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});