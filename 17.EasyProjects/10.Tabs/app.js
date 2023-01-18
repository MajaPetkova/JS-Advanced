const buttons = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const about = document.querySelector(".container");

about.addEventListener("click", onClick);

function onClick(e) {
  const id = e.target.dataset.id;

  if (id) {
    buttons.forEach((x) => x.classList.remove("active"));
    e.target.classList.add("active");
  }
  articles.forEach((x)=> x.classList.remove("active"));
  const element= document.getElementById(id); 
  element.classList.add("active")
}
