const arrow = document.querySelector('.arrow'); //Get element with 'arrow' class.
const speed = document.querySelector('.speed-value'); //Get element with 'speed-value' class.

// The Navigator.geolocation read-only property returns a Geolocation object
// that gives Web content access to the location of the device.
// watchPosition() method is used to register a handler function that will be called automatically each time the position of the device changes.
navigator.geolocation.watchPosition(
  data => {
    console.log(data);
    speed.textContent = data.coords.speed; // Get speed.
    arrow.style.transform = `rotate(${data.coords.heading}deg)`; // Get rotation degrees.
  },
  err => {
    console.error(err);
  }
);
