function debounce(func, wait = 20, immediate = true) {
  // As scroll event fires when the document view or an element has been scrolled
  // it can be a cause of performance issues, so this function check scroll changes every 20ms.
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in'); // Get all elements with 'slide-in' class (it's images).

function checkSlide() {
  sliderImages.forEach(sliderImage => {
    // half way through the image
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2;
    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

// The scroll event fires when the document view or an element has been scrolled.
window.addEventListener('scroll', debounce(checkSlide));
