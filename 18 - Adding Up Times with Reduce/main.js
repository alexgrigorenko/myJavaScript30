// Get all elements with data-time atributtes and convert it to the array.
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

// First map return an array of the times
// Second one return mins and secs separately (parseFloat convert string to the number).
// Finally, calculate total duration (using reduce).
const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

// Calculate total duration in hours, minutes and seconds.
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);
