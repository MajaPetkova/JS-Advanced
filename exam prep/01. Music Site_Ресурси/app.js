window.addEventListener('load', solve);

function solve() {
    document.getElementById('add-btn').type = 'button';
    let genreInput = document.getElementById('genre');
    let nameInput = document.getElementById('name');
    let authorInput = document.getElementById('author');
    let dateInput = document.getElementById('date');

    let buttonAdd = document.getElementById('add-btn')
    buttonAdd.addEventListener('click', onClick);
    let count = 0;

    function onClick() {
        if (genreInput.value !== "" &&
            nameInput.value !== "" &&
            authorInput.value !== "" &&
            dateInput.value !== "") {

            let divHitsInfo = document.createElement('div');
            divHitsInfo.classList = "hits-info";

            let img = document.createElement('img');
            img.src = "./static/img/img.png";
            let headingGenres = document.createElement('h2');
            let headingName = document.createElement('h2');
            let headingAuthor = document.createElement('h2');
            let headingDate = document.createElement('h3')

            let buttonSave = document.createElement('button');
            buttonSave.classList = 'save-btn';
            buttonSave.textContent = 'Save song';
            buttonSave.addEventListener('click', onSave)

            let buttonLike = document.createElement('button');
            buttonLike.classList = 'like-btn';
            buttonLike.textContent = 'Like song';
            buttonLike.addEventListener('click', onLike)

            let buttonDelete = document.createElement('button');
            buttonDelete.classList = 'delete-btn';
            buttonDelete.textContent = 'Delete'
            buttonDelete.addEventListener('click', onDelete)



            headingGenres.textContent = `Genre: ${genreInput.value}`;
            headingName.textContent = `Name: ${nameInput.value}`;
            headingAuthor.textContent = `Author: ${authorInput.value}`;
            headingDate.textContent = `Date: ${dateInput.value}`;

            divHitsInfo.appendChild(img);
            divHitsInfo.appendChild(headingGenres);
            divHitsInfo.appendChild(headingName);
            divHitsInfo.appendChild(headingAuthor);
            divHitsInfo.appendChild(headingDate);
            divHitsInfo.appendChild(buttonSave);
            divHitsInfo.appendChild(buttonLike);
            divHitsInfo.appendChild(buttonDelete);

            document.querySelector('.all-hits-container').appendChild(divHitsInfo)

            genreInput.value = '';
            nameInput.value = '';
            dateInput.value = '';
            authorInput.value = '';


            function onLike(ev) {
                count++;
                document.querySelector('div.likes').children[0].textContent = `Total Likes: ${count}`
                ev.target.disabled = true;
            }

            function onSave() {
                document.querySelector('div.saved-container').appendChild(divHitsInfo);
                divHitsInfo.removeChild(buttonSave);
                divHitsInfo.removeChild(buttonLike);
            }

            function onDelete(ev) {
                ev.target.parentNode.parentNode.removeChild(divHitsInfo)
            }
        }
    }

}