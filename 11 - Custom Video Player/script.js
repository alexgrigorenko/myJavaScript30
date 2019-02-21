/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */
function togglePlay() {
  // Paused video if it's plaing and vice versa.
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  // Insert an appropriate icon in the play/pause button.
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
  // Just change current time.
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  // Update an appropriate range (volume or playback rate).
  video[this.name] = this.value;
}

function handleProgress() {
  // Show progress bar in percents.
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  // Modify video current time.
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay); // Play/pause video if you click on it.
video.addEventListener('play', updateButton); // Update play/pause button when video run
video.addEventListener('pause', updateButton); // Update play/pause button when video is stopped
video.addEventListener('timeupdate', handleProgress); // The timeupdate event is fired when the time indicated by the currentTime attribute has been updated

toggle.addEventListener('click', togglePlay); // Play/pause video if you click on play/pause button.
skipButtons.forEach(button => button.addEventListener('click', skip)); // Get all elements with data-set attribute and after you click on any of them invoke skip function.

// There is two ranges (volume and playback rate) and two handlers. One of them fires when input value is changed by user
// and another fires when a pointing device (usually a mouse) is moved while over an element.
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

// All stuff below allows change current video time by pressing pointing device button (usually left mouse button) and scrubbing on the progress bar.
let mousedown = false;
progress.addEventListener('click', scrub); // This one works if you click on the particular position on the progress bar.
progress.addEventListener('mousemove', e => mousedown && scrub(e));
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));
