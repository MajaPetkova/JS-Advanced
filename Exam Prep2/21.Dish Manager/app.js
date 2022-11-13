window.addEventListener("load", solve);

function solve() {
  const firstNameEl = document.getElementById("first-name");
  const lastNameEl = document.getElementById("last-name");
  const ageEl = document.getElementById("age");
  const genderEl = document.getElementById("genderSelect");
  const descriptionEl = document.getElementById("task");
  const submitBtn = document.getElementById("form-btn");

  submitBtn.addEventListener("click", onSubmit);

  function onSubmit() {
    const firstName = firstNameEl.value.trim();
    const lastName = lastNameEl.value.trim();
    const age = Number(ageEl.value).trim();
    const gender = genderEl.value;
    const description = descriptionEl.value.trim();
    if(firstName=='' || lastName== '' || age=='' || Number.isNaN(age) || description==''){
      return;
    }
    console.log('valid')
  }

  function e(type, attr, ...content){
    const element= document.createElement(type);
    for(let prop in attr){
      element[prop]= attr[prop];
    }
    for(let item of content){
      element.appendChild(item)
    }
  }
}
