window.addEventListener("load", () => {
  const form = document.getElementById("new-task-form");

  form.addEventListener("submit", onSubmit);
});

const listElement = document.getElementById("tasks");
const input = document.getElementById("new-task-input");

function onSubmit(e) {
  e.preventDefault();
  if (input.value == "") {
    alert("Please fill out the task!");
    return;
  }
  const taskElement = document.createElement("div");
  taskElement.className = "task";

  const taskContent = document.createElement("div");
  taskContent.className = "content";
  //   taskContent.innerText = input.value;

  taskElement.appendChild(taskContent);

  const taskInputEl = document.createElement("input");
  taskInputEl.className = "text";
  taskInputEl.type = "text";
  taskInputEl.value = input.value;
  taskInputEl.setAttribute("readonly", "readonly");
  taskContent.appendChild(taskInputEl);
  listElement.appendChild(taskElement);

  const taskActionsEl = document.createElement("div");
  taskActionsEl.className = "actions";

  const editBtnEl = document.createElement("button");
  editBtnEl.className = "edit";
  editBtnEl.innerHTML = "Edit";

  const delBtnEl = document.createElement("button");
  delBtnEl.className = "delete";
  delBtnEl.innerHTML = "Delete";

  taskActionsEl.appendChild(editBtnEl);
  taskActionsEl.appendChild(delBtnEl);
  taskElement.appendChild(taskActionsEl);
}
