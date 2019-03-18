// Get all the required elements.
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

// Global variables.
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
  // Return random time in the min-max interval.
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  // Choose random hole number.
  const idx = Math.floor(Math.random() * holes.length);

  // Chose random hole.
  const hole = holes[idx];

  // Skip if the new hole is the same as the previous one and invoke function one more time.
  if (hole === lastHole) {
    return randomHole(holes);
  }

  // Update variable and return random hole.
  lastHole = hole;
  return hole;
}

function peep() {
  // Get time and hole from appropriate functions.
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);

  // Add 'up' class to the appropriate hole.
  hole.classList.add('up');

  // Hide mole after 'time' and invoke 'peep' function again if the game time hasn't expired.
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  // Reset score.
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;

  // Invoke 'peep' function.
  peep();

  // Start game time (10 seconds).
  setTimeout(() => (timeUp = true), 10000);
}

function bonk(e) {
  // Check if you really click on the mole (and don't cheat with JS).
  if (!e.isTrusted) return; // cheater!

  // Increase score.
  score++;

  // Hide mole after player click on it.
  this.parentNode.classList.remove('up');

  // Modify the score on the pag
  scoreBoard.textContent = score;
}

// Add event listener to the moles.
moles.forEach(mole => mole.addEventListener('click', bonk));
