const slideshowImages = document.querySelectorAll(".intro-slideshow img");

const nextImageDelay = 3500;
let currentImageCounter = Math.floor(Math.random()*slideshowImages.length); // setting a variable to keep track of the current image (slide)
// slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  // slideshowImages[currentImageCounter].style.display = "none";
  slideshowImages[currentImageCounter].style.opacity = 0;

  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;

  // slideshowImages[currentImageCounter].style.display = "block";
  slideshowImages[currentImageCounter].style.opacity = 1;
}

/*let menubar = document.getElementById("menu");

menubar.style.opacity = 0;
menubar.style.transition = "opacity 8s";
menubar.style.transitionTimingFunction = "step-end"

menubar.onmouseout = function(){
  menubar.style.opacity = 0;
  menubar.style.transition = "opacity 1.5s";
}
menubar.onmouseover = function(){
  menubar.style.opacity = 1;
  menubar.style.transition = "opacity 0.5s";
}
*/
