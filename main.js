let mobile = document.querySelectorAll(".mobile");
let desktop = document.querySelectorAll(".desktop");

let width = window.matchMedia("(min-width: 730px)");

function showImages(width) {
  if (width.matches) {
    mobile.forEach((image) => {
      image.classList.add("hidden");
    });
    desktop.forEach((image) => {
      image.classList.remove("hidden");
    });
  }
}

showImages(width); // Call listener function at run time
width.addListener(showImages); // Attach listener function on state changes
