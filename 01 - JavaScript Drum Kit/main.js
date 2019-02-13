function removeTransition(e) {
  console.log(e);

  if (e.propertyName !== 'transform') return; // Skip it if it is not a transform.
  this.classList.remove('playing'); //Remove 'playing' class from the element.
}

function playSound(e) {
  // Get audio with specific CSS selector
  // (audio tag in which data-key attribute equels to keycode).
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`); // Get div tag with specific CSS selector.
  if (!audio) return; // Stop the function from running all together.

  key.classList.add('playing'); // Add CSS 'playing' class to the specific element.
  audio.currentTime = 0; // Set time in the audio file to 0 (at the beginning).
  audio.play(); // Play audio file.
}

// 1) Return NodeList of all elements with 'key' class after that the Array.from() method creates a new,
//    shallow-copied Array instance from NodeList.
const keys = Array.from(document.querySelectorAll('.key'));

// 2) The forEach() method executes an arrow function once for each array element
//    (we transform NodeList to an array on stage 1), addEventListener() in the arrow function sets up a removeTransition that will be called
//    when 'transitionend' (CSS transition has completed) event is delivered to the key.
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// 3) The same as on the previous step, but function playSound will be called when any key is pressed down.
window.addEventListener('keydown', playSound);
