const addItems = document.querySelector('.add-items'); // Get element with 'add-items' class.
const itemsList = document.querySelector('.plates'); // Get element with 'plates' class.
// Get all elements with 'items' id from localStorage (when the stored data is saved across browser sessions), or create an empty array if there is none.
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  // Default action should not be taken as it normally would be (reload the page and post value to the server in this case).
  e.preventDefault();
  const text = this.querySelector('[name=item]').value; // Get the value of the element with 'name' attribute equals to name (this refers to the form element items).
  // Add it to the item object.
  const item = {
    // Short ES6 form (text: text).
    text,
    done: false,
  };

  items.push(item); // Add item element to items array.
  populateList(items, itemsList); // Invoke populateList function and pass items and itemsList as arguments.
  localStorage.setItem('items', JSON.stringify(items)); // Add items to the localStorage to prevent removing items after refreshing page.
  this.reset(); // Reset input.
}

function populateList(plates = [], platesList) {
  // Get plates array as an input, then run through its elements and return an array with list items.
  // Then transform it to the string and paste to the HTML.
  platesList.innerHTML = plates
    .map(
      (plate, i) => `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? 'checked' : ''
      } />
        <label for="item${i}">${plate.text}</label>
      </li>
    `
    )
    .join('');
}

function toggleDone(e) {
  // Done or undone
  if (!e.target.matches('input')) return; // skip this unless it's an input
  const el = e.target; // Get checked element.
  const index = el.dataset.index; // Get the index of the checked element.
  items[index].done = !items[index].done; // Toggle checkbox.
  localStorage.setItem('items', JSON.stringify(items)); // Update localStorage.
  populateList(items, itemsList); // Update HTML.
}

// Run if submit or click events are occurring.
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);
