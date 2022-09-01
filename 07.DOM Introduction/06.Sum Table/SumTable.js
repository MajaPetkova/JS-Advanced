function sumTable() {
    const rows = document.querySelectorAll('table tr');
    let sum = 0;

    for (let i = 1; i < rows.length - 1; i++) {
        const cell = rows[i].lastElementChild;
        sum += Number(cell.textContent);
    }
    document.getElementById('sum').textContent = sum;



    // second Solution

    // let costElements = document.querySelectorAll('tr td:nth-of-type(2)');
    // let sum = Array.from(costElements).reduce((a, x) => {
    //     let currentValue = Number(x.textContent) || 0;
    //     return a + currentValue;
    // }, 0);
    // let resultElement = document.getElementById('sum');
    // resultElement.textContent = sum

}