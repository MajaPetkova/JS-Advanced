window.addEventListener("load", () => {
  todos = JSON.parse(localStorage.getItem("todos")) || [];

  const nameInput = document.getElementById("name");
  //   const todoList = document.getElementById("todo-list");
  const newTodoForm = document.querySelector("#new-todo-form");
  const username = localStorage.getItem("username") || [];
  nameInput.value = username;

  nameInput.addEventListener("change", (e) => {
    localStorage.setItem("username", e.target.value);
  });

  newTodoForm.addEventListener("submit", onSubmit);
});

function onSubmit(ev) {
  ev.preventDefault();
  const formData = new FormData(ev.target);
  const content = formData.get("content");
  const category = formData.get("category");
  const done = false;
  const createdAt = new Date();
  console.log(createdAt);
}
