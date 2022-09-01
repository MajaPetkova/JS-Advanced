function addItem() {
    let inputElement = document.getElementById('newItemText');
    let itemsElement = document.getElementById('items')

    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;
    itemsElement.appendChild(liElement);

    // const input = document.getElementById('newItemText')

    // const liEl = document.createElement('li');
    // liEl.textContent = input.value;

    // document.getElementById('items').appendChild(liEl);
    // input.value = '';
}