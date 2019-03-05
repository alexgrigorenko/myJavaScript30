const canvas = document.querySelector('#draw'); // Get canvas element (with 'draw' id).
const ctx = canvas.getContext('2d'); // The HTMLCanvasElement.getContext() method returns a drawing context on the canvas, or null if the context identifier is not supported.
// Override width and height (800px by default in the <canvas>).
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Define colour, the shape used to join two line segments, the shape of the endpoints and width of lines respectively.
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
// ctx.globalCompositeOperation = 'multiply';

// Declare some variables.
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  // Update lastX and lastY variables.
  [lastX, lastY] = [e.offsetX, e.offsetY];

  // Change color.
  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  // Change line width (from thin to thick and reverse) by flipping the direction.
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

// Set isDraw to true and modify lastX and lastY when mousedown is occurred.
canvas.addEventListener('mousedown', e => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));
