const inputs = document.querySelectorAll('.controls input'); // Get all elemenent with input tag inside div with controls class.

function handleUpdate() {
  // The dataset property on the HTMLElement interface provides read/write access to all the custom data attributes (data-*) set on the element. 
  const suffix = this.dataset.sizing || ''; // If there is not a data attribute (Base Color) then sizing = '';
  // Add style attribute to the html tag and set property name and its value.
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate)); // The change fires for <input>, <select>, and <textarea> elements when an alteration to the element's value is committed by the user.
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); // The mousemove event is fired when a pointing device (usually a mouse) is moved while over an element.