// Get h1 element inside an element with 'hero' class.
const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500; // 500px

function shadow(e) {
  console.log(e);
  const { offsetWidth: width, offsetHeight: height } = hero; // Get width and height from hero element (destruction).
  let { offsetX: x, offsetY: y } = e; // Provides the offset in the X coordinate of the mouse pointer between that event and the padding edge of the target node.

  // Normalization (this refers to 'hero').
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  // Set max moving.
  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  // Add shadow style to the text element.
  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `;
}

hero.addEventListener('mousemove', shadow);
