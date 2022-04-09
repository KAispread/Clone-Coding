let slideArray = document.querySelectorAll("#slideImg > li"),
    slide = document.querySelector("#slideImg"),
    prev = document.querySelector("#prevSlideButton"),
    next = document.querySelector("#nextSlideButton");

const imgPerWidth = 1200
let count = 0,
    imgCount = slideArray.length;

slide.style.width = (imgPerWidth * imgCount) + 'px';
prev.style.display = "none";

function moveSlide(n){
  slide.style.left = -imgPerWidth * n + 'px';
}

prev.addEventListener('click', function(){
  if (count > 0) {
    count--;
    moveSlide(count);

    if (count === 0){
      prev.style.display = "none";
    }
    else {
      next.style.display = "inline-block";
    }
  }
});

next.addEventListener('click', function(){
  if (count < slideArray.length - 1) {
    count++;
    moveSlide(count);

    if (count === slideArray.length - 1) {
      next.style.display = "none";
    }
    else {
      prev.style.display = "inline-block";
    }
  }
});
