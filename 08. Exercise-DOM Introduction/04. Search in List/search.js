function search() {
    let inputWord = document.getElementById('searchText').value;
    let items = Array.from(document.querySelectorAll('#towns li'));
    let counter = 0;
    let match = document.getElementById('result');

    for (let town of items) {
        if (town.textContent.includes(inputWord) && inputWord !== " ") {
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
            counter++
        } else {
            town.style.fontWeight = 'normal';
            town.style.textDecoration = 'none';

        }
    }
    match.textContent = `${counter} matches found`
}