function solution() {

    let inputElement = document.querySelector('input')
    let addGiftBtn = document.querySelector('button')

    let listField = document.querySelector('ul')
    let products = [];

    let sections = Array.from(document.querySelectorAll('section'))
    let sendGiftSection = sections[2];
    let discartedGiftsSection = sections[3];

    const sendGiftsUl = sendGiftSection.querySelector('ul')
    const discartedGifts = discartedGiftsSection.querySelector('ul')

    addGiftBtn.addEventListener('click', addGift)

    function addGift(ev) {
        ev.preventDefault()
        let gift = inputElement.value;

        let giftElement = document.createElement('li')
        giftElement.textContent = gift;
        giftElement.classList.add = ('gift');
        listField.appendChild(giftElement)
        products.push(giftElement)

        inputElement.value = '';
        products.sort((a, b) => a.textContent.localeCompare(b.textContent))


        const sendBtn = document.createElement('button');
        const discardBtn = document.createElement('button')

        sendBtn.textContent = 'Send';
        discardBtn.textContent = 'Discard';

        sendBtn.classList.add('sendButton')
        discardBtn.classList.add('discardButton')

        giftElement.appendChild(sendBtn)
        giftElement.appendChild(discardBtn)

        for (let giftElement of products) {
            listField.appendChild(giftElement);
        }
        sendBtn.addEventListener('click', sendGift)

        function sendGift(ev) {
            ev.preventDefault()
            let sendGift = this.parentNode;

            sendGiftsUl.appendChild(sendGift);
            sendGift.removeChild(sendBtn);
            sendGift.removeChild(discardBtn);
            products.splice(products.indexOf(sendGift), 1)
        }
        discardBtn.addEventListener('click', discartGift)

        function discartGift() {
            ev.preventDefault()
            let sendGift = this.parentNode;
            discartedGifts.appendChild(sendGift)
            sendGift.removeChild(sendBtn);
            sendGift.removeChild(discardBtn);
            products.splice(products.indexOf(sendGift), 1)
        }
    }
}