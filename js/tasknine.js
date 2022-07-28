const widget = document.querySelector(".widget");
const colorForm = document.querySelector(".color");
const btn = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function changeColor(event) {
    colorForm.style.backgroundColor = getRandomHexColor();
}

btn.addEventListener('click', changeColor)