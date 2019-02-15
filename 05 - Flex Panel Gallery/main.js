const panels = document.querySelectorAll('.panel'); // Get element with 'panel' class.

function toggleOpen() {
  console.log('Hello');
  this.classList.toggle('open'); // Toggle the class value; i.e., if the class 'open' exists then remove it and return false, if not, then add it and return true.
}

function toggleActive(e) {
  console.log(e.propertyName); // Get property name from event (TransitionEvent in this case);
  if (e.propertyName.includes('flex')) {
    //If in property name is 'flex' then execute code below.
    this.classList.toggle('open-active'); // Toggle the class value; i.e., if the class "open-active' exists then remove it and return false, if not, then add it and return true.
  }
}

// addEventListener() in the arrow function sets up a toggleOpen that will be called
// when 'click' event is delivered to the panel.
panels.forEach(panel => panel.addEventListener('click', toggleOpen));

// addEventListener() in the arrow function sets up a toggleActive that will be called
// when 'transitionend' (CSS transition has completed) event is delivered to the panel.
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
