function solve() {
    // const fields = document.querySelectorAll('#container input');
    // const addButton = document.querySelector('#container button')
    // const petList = document.querySelector('#adoption ul');
    // const adoptedList = document.querySelector('#adopted ul')

    // const input = {
    //     name: fields[0],
    //     age: fields[1],
    //     kind: fields[2],
    //     owner: fields[3]
    // }
    // addButton.addEventListener('click', addPet)

    // function addPet(ev) {
    //     ev.preventDefault();

    //     const name = input.name.value;
    //     const age = Number(input.name.value);
    //     const kind = input.name.value;
    //     const owner = input.name.value;

    //     if (name == '' || input.age.value == '' || kind == '' || owner == '') {
    //         return;
    //     }
    //     // console.log('valid input')
    //     const contactBtn= el('button',{},'Contact with owner' );

    //     const pet = el('li', {}, 
    //        el('p', {}, 
    //          el ('strong', {}, name),
    //        'is a',
    //        el('strong', {}, age),
    //        'year old',
    //        el('strong', {}, kind)
    //         ),
    //       el('span',{}, `Owner: ${owner}`),
    //       contactBtn
    //     )
    //     contactBtn.addEventListener('click', contact)
    //     petList.appendChild(pet);
    //     // input.name.value='';
    //     // input.age.value='';
    //     // input.kind.value='';
    //     // input.owner.value='';
    //    document.querySelector('form').reset();

    //     function contact(){
    //         const confirmInput= el('input', {placeholder: 'Enter your names'});
    //         const confirmBtn= el('button', {}, 'Yes! I take it!')
           
    //         const confirmationDiv= el('div', {},
    //         confirmInput,
    //         confirmBtn
    //         );

    //         confirmBtn.addEventListener('click', adopt.bind(null, confirmInput, pet) );
    //         contactBtn.remove();
    //         pet.appendChild(confirmationDiv)
    //     }

    // }

    // function adopt(input, pet){
    //     const newOwner= input.value.trim();

    //     if(newOwner==''){
    //         return
    //     }
    //     const checkBtn=el('button', {}, 'Checked')
    //   checkBtn.addEventListener('click', check.bind(null, pet))

    //   pet.querySelector('div').remove();
    //   pet.appendChild(checkBtn)
    //   pet.querySelector('span').textContent= `New Owner: ${newOwner}`
       
    //   adoptedList.appendChild(pet)
    // }
    // function check(pet){
    //    pet.remove()
    // }

    // function el(type, attributes, ...content) {
    //     const element = document.createElement(type);

    //     for (let prop in attributes) {
    //         element[prop]=attributes[prop]
    //     }    //object for in
    //     for(let item of content){
    //         if(typeof item=='string' || typeof item== 'number'){
    //             item= document.createTextNode(item)
    //         }
    //         element.appendChild(item)
    //     }  //masiv for of

    //     return element;
    // }

    const fileds = document.querySelectorAll('#container input');
    const addBtn = document.querySelector('#container button')
    const petList = document.querySelector('#adoption ul')
    const adoptedList = document.querySelector('#adopted ul')

    let [name, age, kind, owner] = Array.from(fileds)
    addBtn.addEventListener('click', addPet);

    function addPet(ev) {
        ev.preventDefault();

        if (!(name.value && Number(age.value) && kind.value && owner.value)) {
            return;
        }
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.innerHTML = `<strong>${name.value}</strong> is a <strong>${age.value}</strong> years old <strong>${kind.value}</strong>`;
        let sOwner = document.createElement('span');
        sOwner.textContent = `Owner: ${owner.value}`;
        let contactBtn = document.createElement('button');
        contactBtn.textContent = 'Contact with owner';

        li.appendChild(p);
        li.appendChild(sOwner);
        li.appendChild(contactBtn);
        petList.appendChild(li);
        contactBtn.addEventListener('click', makeContact)
    }

    function makeContact(ev) {
        const parent = ev.target.parentElement; //button
        ev.target.remove();

        const div = document.createElement('div');
        const takeBtn = document.createElement('button');
        takeBtn.textContent = 'Yes! I take it!';


        const inputEl = document.createElement('input')
        inputEl.placeholder = 'Enter your names'

        div.appendChild(inputEl);
        div.appendChild(takeBtn);
        div.appendChild(inputEl)
        parent.appendChild(div);

        takeBtn.addEventListener('click', (ev) => {
            if (inputEl.value == '') {
                return;
            }

            ev.target.textContent = 'Checked';
            adoptedList.appendChild(ev.target.parentElement.parentElement)

            const span = document.querySelector('span');
            span.textContent = `New Owner: ${inputEl.value}`;

            const checkBtn = el('button', 'Cheked');
            e.target.parentElement.parentElement.appendChild(checkBtn);
            e.target.parentElement.remove();

            checkBtn.addEventListener('click', (ev) => {
                ev.target.parentElement.remove()
            })

        })
    }



}