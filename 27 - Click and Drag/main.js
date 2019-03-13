// Get element with 'item' class.
const slider = document.querySelector('.items');
// We use isDown variable as a flag (equals to false if the LMB is not pressed and vice versa).
let isDown = false;
let startX;
let scrollLeft;

// Add event listeners to mousedown, mouseleave, mouseup and mousemove.

// Set flag to true, add 'active' class and define the starting position of the cursor (when it was pressed).
slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

// Set the flag to the false and remove 'active' class when the cursor leaves the element.
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

// The same situation as in the previous case.
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

// Move the slider if isDown equal to true.
slider.addEventListener('mousemove', e => {
  if (!isDown) return; // stop the fn from running
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});
