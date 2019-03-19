// The SpeechRecognition interface of the Web Speech API is the controller interface for the recognition service (from MDN).
// Speech recognition interfaces are currently prefixed in Chrome, so you'll need to prefix interface names appropriately, e.g. webkitSpeechRecognition
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// This constructor create new SpeechRecognition object instance.
const recognition = new SpeechRecognition();

// Controls whether interim results should be returned (true) or not (false).
recognition.interimResults = true;

// Set language (English).
recognition.lang = 'en-US';

// Create new 'p' element.
let p = document.createElement('p');

// Get element with 'words' class.
const words = document.querySelector('.words');

// Add 'p' element to the end of the 'words' element.
words.appendChild(p);

// Add event listener for 'result'.
recognition.addEventListener('result', e => {
  // Convert 'result' to the regular array.
  // Get all recognised words and returns than as a string.
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  // Just funny replacement =)
  const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');

  // Past recognised text to the 'p' element.
  p.textContent = poopScript;

  // The isFinal read-only property of the SpeechRecognitionResult interface is a Boolean
  //that states whether this result is final (true) or not (false) — if so, then this is the final time
  //this result will be returned; if not, then this result is an interim result, and may be updated later on (from MDN).
  if (e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }
});

recognition.addEventListener('end', recognition.start);

recognition.start();
