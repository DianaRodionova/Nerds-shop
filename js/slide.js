const features = document.querySelector(".features");
const slide = features.querySelectorAll(".feature-item");
const slideLink = features.querySelectorAll(".controls-button");

slideLink.forEach(function(item,index) {
  item.addEventListener("click", function() {changeSlide(slide, slideLink, index)})
})

function changeSlide (slides, controls, i) {
  slides.forEach(function(item) {
    if (item.classList.contains("slide-current")) {
      item.classList.remove("slide-current")
    }
  })
  slides[i].classList.add("slide-current")

  controls.forEach(function(item) {
    if (item.classList.contains("current")) {
      item.classList.remove("current")
    }
  })
  controls[i].classList.add("current")
}
