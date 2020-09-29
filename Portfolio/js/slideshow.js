//////////////Variables//////////////

let slideIndex = 0;
const slides = document.getElementsByClassName("img-container");
const prev = document.getElementById("leftarrow");
const next = document.getElementById("rightarrow");
const sig = document.getElementById('signifier');

////////////////Set-up dots////////////////

function initGallery(){
  dots=[];
  let dotsContainer = document.getElementById("dotsContainer");
  for (i = 1; i < slides.length+1; i++) {
      var dot = document.createElement("span");
      dot.classList.add("dots");
      dotsContainer.append(dot);
      dot.setAttribute("onclick","currentSlide("+i+")"); //when i starts from zero doesnt match the loop for sliderIndex
      dots.push(dot);
  }
  dots[slideIndex].classList.add("active");
}


////////play pause toggle////////

let listToggle = 1;
const classes = ['pause', 'play'];
const toggleClass = () => {
  if(timer==null){
    setTimer();
    sig.classList = classes[0];
  }
  else{
    clearInterval(timer);
    timer=null;
    sig.classList = classes[1];
  }
};


///// Next/previous controls/////

function plusSlides(n) {
  showSlides(slideIndex += n);
}

prev.onclick = function(){
  if(timer!=null){
    clearInterval(timer);
    timer=null;
    sig.classList = classes[1];
    plusSlides(-1);
  }
  else{
    plusSlides(-1);
  }
};

next.onclick = function(){
  if(timer!=null){
    clearInterval(timer);
    timer=null;
    sig.classList = classes[1];
    plusSlides(1);
  }
  else {
    plusSlides(1);
  }
};

window.addEventListener("keydown", function(event){
  if (event.defaultPrevented){
    return;
  }
  switch(event.key){
    case "ArrowLeft":
        if(timer!=null){
          clearInterval(timer);
          timer=null;
          sig.classList = classes[1];
          plusSlides(-1);
        }
        else{
          plusSlides(-1);
        }
      break;

      case "ArrowRight":
          if(timer!=null){
            clearInterval(timer);
            timer=null;
            sig.classList = classes[1];
            plusSlides(1);
          }
          else {
            plusSlides(1);
          }
      break;

      case " ":
          if(timer==null){
            setTimer();
            sig.classList = classes[0];
          }
          else{
            clearInterval(timer);
            timer=null;
            sig.classList = classes[1];
          }
      break;


      default:
      return;
  }

  event.preventDefault();
}, true);


// Thumbnail image controls//

function currentSlide(n) {
  showSlides(slideIndex = n);
}

//////show slides//////

function showSlides(n) {
  var i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].classList.remove("active");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/////autoplay/////

var timer = null;
function setTimer(){
    timer = setInterval(function () {
        plusSlides(1) ;
    },4000);
}

///Run///

initGallery();
currentSlide(1); //start at first image
setTimer();


let reminder = document.getElementById("reminder");

reminder.style.opacity = 0;
reminder.style.transition = "opacity 15s";
reminder.style.transitionTimingFunction = "ease-end";
