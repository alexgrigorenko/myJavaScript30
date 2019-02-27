const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];

function strip(bandName) {
  // Return names of the bands without articles.
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

// Sort bands names alphabetically (without articles).
const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

// Paste sorted bands into the HTML.
document.querySelector('#bands').innerHTML = sortedBands
  .map(band => `<li>${band}</li>`)
  .join('');

console.log(sortedBands);
