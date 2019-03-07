const nav = document.querySelector('#main'); // Get navbar.
const topOfNav = nav.offsetTop; // Get navbar top offset.

function fixNav() {
  if (window.scrollY >= topOfNav) {
    // Add extra padding to the top to solve fix problem (because the fixed element doesn`t take space).
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    // Add 'fixed-nav' class to the body element.
    document.body.classList.add('fixed-nav');
  } else {
    // Opposite to if statement.
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

// The scroll event fires when the document view or an element has been scrolled.
window.addEventListener('scroll', fixNav);
