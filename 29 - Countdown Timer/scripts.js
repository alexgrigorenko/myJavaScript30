let countdown;
// Get all the required elements.
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);

  // Get current time (in ms).
  const now = Date.now();

  // Time of the end of the timer.
  const then = now + seconds * 1000;
  // Invoke displayTimeLeft and displayEndTime functions.
  displayTimeLeft(seconds);
  displayEndTime(then);

  // Refresh time every 1 second.
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it!
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  // Get minutes.
  const minutes = Math.floor(seconds / 60);
  // Get seconds.
  const remainderSeconds = seconds % 60;
  // Display time (if seconds are less then 10 we add extra 0).
  const display = `${minutes}:${
    remainderSeconds < 10 ? '0' : ''
  }${remainderSeconds}`;
  // Display reminding time at the tab title.
  document.title = display;
  // Display time on the page.
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  // Convert ms to normal form (for instance, 1552644866479 => Fri Mar 15 2019 12:14:26 GMT+0200 (Eastern European Standard Time)).
  const end = new Date(timestamp);
  // Get hours.
  const hour = end.getHours();
  // Convert hours to the pm/am form.
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  // Get minutes.
  const minutes = end.getMinutes();
  // Display time at the page.
  endTime.textContent = `Be Back At ${adjustedHour}:${
    minutes < 10 ? '0' : ''
  }${minutes}`;
}

function startTimer() {
  // Get time from an appropriate button and invoke timer function with this time as an argument.
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

// Add an event listener to default time (buttons).
buttons.forEach(button => button.addEventListener('click', startTimer));
// Add an event listener to user time.
document.customForm.addEventListener('submit', function(e) {
  // Prevent from refreshing page.
  e.preventDefault();
  // Get minutes
  const mins = this.minutes.value;
  // Pass mins to the timer function as a parameter (* 60 because timer gets parameter in seconds).
  timer(mins * 60);
  // Reset input form.
  this.reset();
});
