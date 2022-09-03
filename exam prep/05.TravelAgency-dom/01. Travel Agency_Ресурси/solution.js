window.addEventListener('load', solution);

function solution() {

    let fullNameEl = document.getElementById('fname');
    let emailEl = document.getElementById('email');
    let phoneEl = document.getElementById('phone');
    let addressEl = document.getElementById('address');
    let postalEl = document.getElementById('code');

    let submitBtn = document.getElementById('submitBTN');
    let editBtn = document.getElementById('editBTN');
    let continueBtn = document.getElementById('continueBTN');

    submitBtn.addEventListener('click', submitData)

    function submitData(ev) {
        ev.preventDefault();

        let li1 = document.createElement('li');
        li1.textContent = `Full Name: ${fullNameEl.value}`

        let li2 = document.createElement('li')
        li2.textContent = `Email: ${emailEl.value}`

        let li3 = document.createElement('li')
        li3.textContent = `Phone Number: ${phoneEl.value}`

        let li4 = document.createElement('li')
        li4.textContent = `Address: ${addressEl.value}`

        let li5 = document.createElement('li')
        li5.textContent = `Postal Code: ${postalEl.value}`

        if (fullNameEl.value !== '' && emailEl.value !== '') {
            document.querySelector('ul').appendChild(li1)
            document.querySelector('ul').appendChild(li2)
            document.querySelector('ul').appendChild(li3)
            document.querySelector('ul').appendChild(li4)
            document.querySelector('ul').appendChild(li5)

            submitBtn.disabled = true;
            editBtn.disabled = false;
            continueBtn.disabled = false;

            fullNameEl.value = '';
            emailEl.value = '';
            phoneEl.value = '';
            addressEl.value = '';
            postalEl.value = '';
        }
    }

    editBtn.addEventListener('click', editData)

    function editData(ev) {
        ev.preventDefault;

        let infoArray = Array.from(document.getElementsByTagName('li'));
        let inputArray = Array.from(document.getElementsByTagName('input'));

        for (let i = 0; i < infoArray.length; i++) {
            inputArray[i].value = infoArray[i].textContent.split(': ')[1];
        }
        document.querySelector('ul').innerHTML = '';
        submitBtn.disabled = false;
        editBtn.disabled = true;
        continueBtn.disabled = true;
    }

    continueBtn.addEventListener('click', continueData)

    function continueData() {
        document.querySelector('#block').innerHTML = '<h3>Thank you for your reservation!</h3>'

        submitBtn.disabled = true;
        editBtn.disabled = true;
        continueBtn.disabled = false;
    }
}