const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});


// typedjs
var typed3 = new Typed("#typed3", {
  strings: ["akbar putra pamungkas", "front end"],
  typeSpeed: 100,
  backSpeed: 100,
  smartBackspace: true, // this is a default
  loop: true,
  cursorChar: "_",
});