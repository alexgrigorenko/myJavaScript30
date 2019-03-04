const triggers = document.querySelectorAll('a'); //Get all 'a' elements.
const highlight = document.createElement('span'); // Create 'span' element.
highlight.classList.add('highlight'); // Add 'highlight' class to the previously created class.
document.body.appendChild(highlight); // Append 'highlight' element to the end of the body.

function highlightLink() {
  // The Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);
  // Consider horizontal (left) and vertical(top) scroll (because their values are relative to the viewport and not absolute).
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  // Modify style.
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

// The 'mouseenter' event is fired when a pointing device (usually a mouse) is moved over the element that has the listener attached.
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
