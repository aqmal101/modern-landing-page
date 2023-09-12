function slideUp(element) {
  const slideDiv = element.querySelector(".translate-y-full");
  slideDiv.style.transform = "translateY(0)";
}

function slideDown(element) {
  const slideDiv = element.querySelector(".translate-y-full");
  slideDiv.style.transform = "translateY(100%)";
}
