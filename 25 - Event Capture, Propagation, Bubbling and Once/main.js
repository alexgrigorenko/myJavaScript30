const divs = document.querySelectorAll('div'); // Get all div elements.
const button = document.querySelector('button'); // Get button element.

function logText(e) {
  console.log(this.classList.value);
  // e.stopPropagation(); // stop bubbling!
  // console.log(this);
}

// capture: A Boolean indicating that events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree.
divs.forEach(div =>
  div.addEventListener('click', logText, {
    capture: false,
    once: true,
  })
);

// once: A Boolean indicating that the listener should be invoked at most once after being added. If true, the listener would be automatically removed when invoked.
button.addEventListener(
  'click',
  () => {
    console.log('Click!!!');
  },
  {
    once: true,
  }
);
