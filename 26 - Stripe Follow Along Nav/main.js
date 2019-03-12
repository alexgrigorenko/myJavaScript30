// Get all required elements.
// element1 > element2 Selects all <element2> elements where the parent is a <element1> element.
const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
  // Add class 'trigger-enter' (display: block)...
  this.classList.add('trigger-enter');
  //... and also add
  setTimeout(
    () =>
      this.classList.contains('trigger-enter') &&
      this.classList.add('trigger-enter-active'),
    150
  );
  // Add 'open' class to the 'background' element.
  background.classList.add('open');

  // Get particular dropdown (that is mouseentered).
  const dropdown = this.querySelector('.dropdown');

  // The Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  // Save coords to the 'coord' object.
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };

  // Set 'background' style properties.
  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty(
    'transform',
    `translate(${coords.left}px, ${coords.top}px)`
  );
}

function handleLeave() {
  // Remove classes.
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

// A pointing device is moved onto the element that has the listener attached.
triggers.forEach(trigger =>
  trigger.addEventListener('mouseenter', handleEnter)
);

// A pointing device is moved off the element that has the listener attached.
triggers.forEach(trigger =>
  trigger.addEventListener('mouseleave', handleLeave)
);
