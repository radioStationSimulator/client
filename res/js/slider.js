var sliderleft = document.getElementById("slider-left")
sliderleft. oninput = function() {
  var currentVal = sliderleft.value
  console.log("Links:" + currentVal);
}

var sliderright = document.getElementById("slider-right")
sliderright. oninput = function() {
  var currentVal = sliderright.value
  console.log("Rechts:" + currentVal);
}