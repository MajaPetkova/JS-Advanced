function solve() {
  const recipientEl = document.getElementById("recipientName");
  const titleEl = document.getElementById("title");
  const messageEl = document.getElementById("message");
  const addBtn = document.getElementById("add");
  const mailListEl = document.getElementById("list");
  const resetBtn = document.getElementById("reset");

  addBtn.addEventListener("click", addMail);
  function addMail(e) {
    e.preventDefault();
    const recipient = recipientEl.value.trim();
    const title = titleEl.value.trim();
    const message = messageEl.value.trim();

    if (recipient == "" || title == "" || message == "") {
      return;
    }
    const liEl = document.createElement("li");

    const titleElement = document.createElement("h4");
    titleElement.innerHTML = `Title: ${title}`;

    const recipientName = document.createElement("h4");
    recipientName.innerHTML = `Recipient Name: ${recipient}`;

    const messageSpanEl = document.createElement("span");
    messageSpanEl.textContent = message;

    const listActions = document.createElement("div");
    listActions.className = "list-action";

    const sendBtn = document.createElement("button");
    sendBtn.textContent = "Send";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    liEl.appendChild(titleElement);
    liEl.appendChild(recipientName);
    liEl.appendChild(messageSpanEl);
    liEl.appendChild(listActions);
    listActions.appendChild(sendBtn);
    listActions.appendChild(deleteBtn);
    mailListEl.appendChild(liEl);
    // console.log(recipient, title,message)
  }
  resetBtn.addEventListener('click', resetForm);
  function resetForm(e){
    e.preventDefault();
    recipientEl.value='';
    titleEl.value='';
    messageEl.value='';
  }
}
solve();
