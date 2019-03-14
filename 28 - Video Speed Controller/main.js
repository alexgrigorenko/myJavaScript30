// Get all the required elements.
const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleMove(e) {
  // Position on speed-bar in px.
  const y = e.pageY - this.offsetTop;

  // Position on speed-bar in percents.
  const percent = y / this.offsetHeight;

  // Mix and max speed.
  const min = 0.4;
  const max = 4;

  // Calculate height and playback rate.
  const height = Math.round(percent * 100) + '%';
  const playbackRate = percent * (max - min) + min;

  // Modify style.
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + '×';

  // Update speed.
  video.playbackRate = playbackRate;
}

// The mousemove event is fired when a pointing device (usually a mouse) is moved while over an element.
speed.addEventListener('mousemove', handleMove);
