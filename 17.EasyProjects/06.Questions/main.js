
// Traversing the DOM 

const buttons = document.querySelectorAll(".question-btn");

buttons.forEach((x) => x.addEventListener("click", onToggle));

function onToggle(e) {
  const question=e.currentTarget.parentElement.parentElement;
  question.classList.toggle("show-text")
}
