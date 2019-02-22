const pressed = [];
const secretCode = 'alex';

window.addEventListener('keyup', e => {
  console.log(e.key);
  pressed.push(e.key); // Add new key to the end of the array.
  // Work similar to the queue (FIFO) where length of the array equals to the length of secretCode.
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  // Check if array, that transformed to the string, includes secret code
  if (pressed.join('').includes(secretCode)) {
    cornify_add(); // Add new unicorn.
  }
  console.log(pressed);
});
