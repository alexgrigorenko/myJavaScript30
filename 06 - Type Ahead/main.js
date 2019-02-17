const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// Get data from the endpoint value and add it to the cities array
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
  // Just filter our array
  return cities.filter(place => {
    // Here we need to figure out if the city or state matches what was searched.
    const regex = new RegExp(wordToMatch, 'gi'); // Create regular expression with wordToMatch that search globaly and in case-insensitive mode.
    return place.city.match(regex) || place.state.match(regex); // Return cities or states in cities array that match regular expression.
  });
}

function numberWithCommas(x) {
  // Function that ruturns numbers with commas. (1000000 => 1,000,000).
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities); // Invoke findMatches function and return all this.value matches in the cities array
  // The method creates a new array with the results of calling a provided function on every element in the calling array.
  const html = matchArray
    .map(place => {
      const regex = new RegExp(this.value, 'gi');
      // Highlight user input in cities and states names;
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
    })
    .join(''); // Create element with all mathes (.join('') create a big string with all matches).
  suggestions.innerHTML = html; // Paste previous element into html.
}

const searchInput = document.querySelector('.search'); // Get element with 'search' class.
const suggestions = document.querySelector('.suggestions'); // Get element with 'suggestions' class.

// change fires for <input>, <select>, and <textarea> elements when an alteration to the element's value is committed by the user.
// Unlike the input event, the change event is not necessarily fired for each alteration to an element's value.
searchInput.addEventListener('change', displayMatches);

// The keyup event is fired when a key is released.
searchInput.addEventListener('keyup', displayMatches);
