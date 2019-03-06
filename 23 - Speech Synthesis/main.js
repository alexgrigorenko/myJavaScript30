const msg = new SpeechSynthesisUtterance();
let voices = [];
// Get all necessary elements.
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
// Set default text.
msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  // Get all available voices.
  voices = this.getVoices();
  // Select only English and paste them to the HTML voices dropdown.
  voicesDropdown.innerHTML = voices
    .filter(voice => voice.lang.includes('en'))
    .map(
      voice =>
        `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    )
    .join('');
}

function setVoice() {
  // Find necessary voice by its name and invode toggle function.
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle();
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

function setOption() {
  // There are three options (rate, pitch and text) so its store one particular option (changed one) and its value.

  console.log(this.name, this.value);
  msg[this.name] = this.value;
  toggle();
}

// Invoke populateVoices function after all voices loaded.
speechSynthesis.addEventListener('voiceschanged', populateVoices);

// Invoke setVoice function after changing the voice.
voicesDropdown.addEventListener('change', setVoice);

// Invoke setOption if one of the options changed.
options.forEach(option => option.addEventListener('change', setOption));

// Run and stop speech respectively.
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));
