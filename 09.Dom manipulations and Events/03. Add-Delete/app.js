function addItem() {
    let itemsEl = document.getElementById('items');
    let inputEl = document.getElementById('newItemText');
    let liElement = document.createElement('li');
    liElement.textContent = inputEl.value;
    inputEl.value = '';

    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';
    deleteElement.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();

    })
    liElement.appendChild(deleteElement);
    itemsEl.appendChild(liElement); //liElement e parent na deleteEl

    // Vtor nachin

    // const input = document.getElementById('newItemText')

    // const liElement = document.createElement('li');
    // liElement.textContent = input.value;

    // const button = document.createElement('a');
    // button.textContent = '[Delete]';
    // button.href = '#'; //za da bide aktiven anker tagot
    // button.addEventListener('click', removeElement) // na buttonot pri klik ja izvrsva funkcijata

    // liElement.appendChild(button); // dosadvame button na redot 

    // document.getElementById('items').appendChild(liElement);

    // input.value = '';

    // function removeElement(evt) {
    //     const parent = evt.target.parentNode; // targetirame celiot red i go brisi(zatoa parentNode)
    //     parent.remove();
    // }

}