// Traversing the DOM

// const buttons = document.querySelectorAll(".question-btn");

// buttons.forEach((x) => x.addEventListener("click", onToggle));

// function onToggle(e) {
//   const question=e.currentTarget.parentElement.parentElement;
//   question.classList.toggle("show-text")
// }

// using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach((x) => {
  // console.log(x)
  const btn = x.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", onToggle);
  function onToggle() {
    questions.forEach((y) => {
      if (y !== x) {
        y.classList.remove('show-text')
      }
    });
    x.classList.toggle("show-text");
  }
});
