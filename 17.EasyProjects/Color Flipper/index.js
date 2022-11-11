const colors = ["lightgreen","#f15025","orange", "green", "salmon", "purple", "pink", "lightblue"];
const btnEl = document.getElementById('btn');
const color = document.querySelector('.color');
const bodyEl= document.body;
btnEl.addEventListener('click', onClick);

function onClick(){
const randomNumber=getRandomColor();
console.log(randomNumber)
bodyEl.style.backgroundColor= colors[randomNumber];
color.textContent= colors[randomNumber]
}

function getRandomColor(){
    return Math.floor(Math.random() * colors.length)
}