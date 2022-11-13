window.addEventListener("load", solve);

function solve() {
  const firstNameEl = document.getElementById("first-name");
  const lastNameEl = document.getElementById("last-name");
  const ageEl = document.getElementById("age");
  const genderEl = document.getElementById("genderSelect");
  const descriptionEl = document.getElementById("task");
  const submitBtn = document.getElementById("form-btn");
  const inProgress= document.getElementById('in-progress');
  submitBtn.addEventListener("click", onSubmit);

  function onSubmit() {
    const firstName = firstNameEl.value.trim();
    const lastName = lastNameEl.value.trim();
    const age = Number(ageEl.value);
    const gender = genderEl.value;
    const description = descriptionEl.value.trim();
    if (
      firstName == "" ||
      lastName == "" ||
      age == "" ||
      Number.isNaN(age) ||
      description == ""
    ) {
      return;
    }
    const manager= document.createElement('li');
    manager.classList= 'each-line';
    const article= document.createElement('article');

    const title= document.createElement('h4');
    title.textContent= firstName + ' ' + lastName;

    const para= document.createElement('p');
    para.textContent= gender + ', ' + age;

    const desc= document.createElement('p');
    desc.textContent= description;

    const editBtn= document.createElement('button');
    editBtn.className='edit-btn';
    editBtn.textContent= 'Edit';
    
    const completeBtn= document.createElement('button');
    completeBtn.className='complete-btn';
    completeBtn.textContent= 'Mark as complete';

    manager.appendChild(article);
    article.appendChild(title);
    article.appendChild(para);
    article.appendChild(desc);
    manager.appendChild(editBtn);
    manager.appendChild(completeBtn);
    
    inProgress.appendChild(manager);
   
    firstNameEl.value = "";
    lastNameEl.value = "";
    ageEl.value = "";
    descriptionEl.value = "";
  
    // console.log(firstName, lastName, age, description, gender);

  }

  // function e(type, attr, ...content) {
  //   const element = document.createElement(type);
  //   for (let prop in attr) {
  //     element[prop] = attr[prop];
  //   }
  //   for (let item of content) {
  //     if (typeof item == "string" || typeof item == "number") {
  //       item = document.createTextNode(item);
  //     }
  //     element.appendChild(item);
  //     return element;
  //   }
  // }
}
