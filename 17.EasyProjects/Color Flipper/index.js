const colors = ["red", "green", "blue", "purple"];

const btnEl = document.getElementById('btn');
const color = document.querySelector('.color');
const bodyEl= document.body;
btnEl.addEventListener('click', onClick);

function onClick(){
const randomNumber=1;
bodyEl.style.backgroundColor= colors[randomNumber];
color.textContent= colors[randomNumber]
}