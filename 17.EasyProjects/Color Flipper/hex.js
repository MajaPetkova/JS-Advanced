const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btnEl = document.getElementById("btn");
const color = document.querySelector(".color");
const backgroundEl= document.body;

// #f15025

btnEl.addEventListener("click", onColorChange);

function onColorChange() {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNum()]
  }
  color.textContent= hexColor;
  backgroundEl.style.backgroundColor = hexColor;
}
function getRandomNum(){
    return Math.floor(Math.random() * hex.length)
}