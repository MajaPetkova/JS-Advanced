function solve() {
  const recipientEl = document.getElementById("recipientName");
  const titleEl = document.getElementById("title");
  const messageEl = document.getElementById("message");
  const addBtn = document.getElementById("add");
  const mailListEl = document.getElementById("list");
  const resetBtn = document.getElementById("reset");
  //   const sendBtn = document.getElementById("send");

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
    sendBtn.setAttribute("id", "send");
    sendBtn.setAttribute("type", "submit");
    sendBtn.textContent = "Send";


    const deleteBtn1 = document.createElement("button");
    deleteBtn1.setAttribute("id", "delete");
    deleteBtn1.setAttribute("type", "submit");
    deleteBtn1.textContent = "Delete";
    
    deleteBtn1.addEventListener('click', onDelete1)
    
    function onDelete1() {
        const deleteList = document.querySelector(".delete-list");

        const liElementDeleted = document.createElement("li");

        const spanElDel = document.createElement("span");
        spanElDel.innerHTML = `To: ${recipient}`;

        const spanELTitle = document.createElement("span");
        spanELTitle.innerHTML = `Title: ${title}`;

        liElementDeleted.appendChild(spanElDel);
        liElementDeleted.appendChild(spanELTitle);

        deleteList.appendChild(liElementDeleted);
        liEl.remove();
      }

    liEl.appendChild(titleElement);
    liEl.appendChild(recipientName);
    liEl.appendChild(messageSpanEl);
    liEl.appendChild(listActions);
    listActions.appendChild(sendBtn);
    listActions.appendChild(deleteBtn1);
    mailListEl.appendChild(liEl);
    // console.log(recipient, title,message)
    const sendBtnEl = document.getElementById("send");
    // console.log(sendBtnEl);
    sendBtnEl.addEventListener("click", onSend);

    function onSend() {
      const sendListMails = document.querySelector(".sent-list");
      const liElementSend = document.createElement("li");

      const spanEl = document.createElement("span");
      spanEl.innerHTML = `To: ${recipient}`;

      const spanElTitle = document.createElement("span");
      spanElTitle.innerHTML = `Title: ${title}`;

      const div = document.createElement("div");
      div.className = "btn";

      const btn = document.createElement("button");
      btn.setAttribute("id", "delete");
      btn.setAttribute("type", "submit");
      btn.textContent = "Delete";

      liElementSend.appendChild(spanEl);
      liElementSend.appendChild(spanElTitle);
      liElementSend.appendChild(div);
      div.appendChild(btn);
      sendListMails.appendChild(liElementSend);
      liEl.remove();

      btn.addEventListener("click", onDelete);

      function onDelete() {
        const deleteList = document.querySelector(".delete-list");

        const liElementDeleted = document.createElement("li");

        const spanElDel = document.createElement("span");
        spanElDel.innerHTML = `To: ${recipient}`;

        const spanELTitle = document.createElement("span");
        spanELTitle.innerHTML = `Title: ${title}`;

        liElementDeleted.appendChild(spanElDel);
        liElementDeleted.appendChild(spanELTitle);

        deleteList.appendChild(liElementDeleted);
        liElementSend.remove();
      }
    }
  }
  resetBtn.addEventListener("click", resetForm);
  function resetForm(e) {
    e.preventDefault();
    recipientEl.value = "";
    titleEl.value = "";
    messageEl.value = "";
  }
}
solve();
