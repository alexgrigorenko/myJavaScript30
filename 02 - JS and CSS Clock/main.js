const secondHand = document.querySelector('.second-hand'); // Get second-hand element.
const minsHand = document.querySelector('.min-hand'); //Get minute-hand element.
const hourHand = document.querySelector('.hour-hand'); //Get hour-hand element.

function setDate() {
  const now = new Date(); // Set current date and time.
  const seconds = now.getSeconds(); // Get seconds from now time.
  // 0 seconds = 90 degrees (in CSS), there is 60 seconds in every minute (it's a full circle) thus 1 second = 6 degrees.
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // rotate second hand on secondsDegrees.

  const mins = now.getMinutes(); // Get minutes from now time.
  // 1 minute = 6 degrees, so every second rotate minute-hand on 0.1 degree.
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`; // rotate minute hand on minsDegrees.

  const hour = now.getHours(); // Get hours from now time.
  // Every hour = 30 degrees thus every minute rotate hour hand on 0.5 degree.
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000); //Calls a setDate function every 1000 milliseconds (1 second).

setDate(); //Invoke a setDate function.
