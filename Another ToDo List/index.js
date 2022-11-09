window.addEventListener("load", () => {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  const nameInput = document.getElementById("name");
  const newTodoForm = document.querySelector("#new-todo-form");

  const username = localStorage.getItem("username") || [];
  nameInput.value = username;

  nameInput.addEventListener("change", (e) => {
    localStorage.setItem("username", e.target.value);
  });

  newTodoForm.addEventListener("submit", onSubmit);
  function onSubmit(ev) {
    ev.preventDefault();
    const todo = {
      content: ev.target.elements.content.value,
      category: ev.target.elements.category.value,
      done: false,
      createdAt: new Date(),
    };
    //   const formData = new FormData(ev.target);
    //   const content = formData.get("content");
    //   const category = formData.get("category");
    //   const done = false;
    //   const createdAt = new Date();
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    ev.target.reset();
    // console.log(todos);
    displayTodos();
  }
});

function displayTodos() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = todo.done;

    const span = document.createElement("span");
    span.className = "bubble";

    if (todo.category == "personal") {
      span.className = "personal";
    } else {
      span.className = "business";
    }

    const content = document.createElement("div");
    content.className = "content";

    const actions = document.createElement("div");
    actions.className = "actions";

    const edit = document.createElement("button");
    edit.className = "edit";
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";

    content.innerHTML = '<input type="text" value="${todo.content}" readonly>';
    edit.innerHTML = "Edit";
    deleteBtn.innerHTML = "Delete";
  });
}
