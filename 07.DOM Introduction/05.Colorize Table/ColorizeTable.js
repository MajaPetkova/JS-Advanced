function colorize() {
    const rows = document.querySelectorAll('table tr')

    for (let i = 1; i < rows.length; i += 2) {
        rows[i].style.backgroundColor = 'teal'
    }


    // second solution


    // let rowsElements = document.getElementsByTagName('tr');
    // let rows = Array.from(rowsElements);

    // rows.forEach((x, i) => {
    //     if (i % 2 !== 0) {
    //         x.style.backgroundColor = 'teal'
    //     }
    // })
}