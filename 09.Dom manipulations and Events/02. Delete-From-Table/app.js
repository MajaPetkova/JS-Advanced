function deleteByEmail() {
    let emailInputElement = document.querySelector('input[name="email"]')
    let emailCellElements = document.querySelectorAll('tr td:nth-of-type(2)');

    let emailElements = Array.from(emailCellElements);
    let targetEl = emailElements.find(x => x.textContent == emailInputElement.value);


    let resultEl = document.getElementById('result');
    if (targetEl) {
        targetEl.parentNode.remove();
        resultEl.textContent = 'Deleted.'
    } else {
        resultEl.textContent = "Not found."
    }

    // const input = document.querySelector('input[name="email"]')

    // const rows = Array.from(document.querySelector('tbody').children);
    // let removed = false
    // for (let row of rows) {
    //     if (row.children[1].textContent == input.value) {
    //         row.remove();
    //         removed = true;
    //     }
    // }

    // if (removed) {
    //     document.getElementById('result').textContent = 'Deleted.';
    // } else {
    //     document.getElementById('result').textContent = 'Not found.'
    // }
}