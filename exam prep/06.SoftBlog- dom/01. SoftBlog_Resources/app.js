function solve() {
    document.getElementsByClassName('btn create')[0].type = 'button'
    const creator = document.getElementById('creator');
    const title = document.getElementById('title');
    const category = document.getElementById('category');
    const content = document.getElementById('content');
    const createBtn = document.getElementsByClassName('btn create')[0];

    createBtn.addEventListener('click', create);

    function create() {
        let article = document.createElement('article');

        let titleEl = document.createElement('h1');
        titleEl.textContent = title.value;

        let categoryEL = document.createElement('p');
        let strongText = document.createElement('strong');
        strongText.textContent = category.value;
        categoryEL.textContent = 'Category: ';
        categoryEL.appendChild(strongText);

        let creatorEl = document.createElement('p');
        let creatorText = document.createElement('strong');
        creatorText.textContent = creator.value;
        creatorEl.textContent = 'Creator: ';
        creatorEl.appendChild(creatorText);

        let contentEl = document.createElement('p');
        contentEl.textContent = content.value;

        let divButtons = document.createElement('div');
        divButtons.classList = 'buttons';

        let deleteBtn = document.createElement('button');
        deleteBtn.classList = 'btn delete';
        deleteBtn.textContent = 'Delete'

        let archiveBtn = document.createElement('button');
        archiveBtn.classList = 'btn archive';
        archiveBtn.textContent = 'Archive'


        article.appendChild(titleEl);
        article.appendChild(categoryEL);
        article.appendChild(creatorEl);
        article.appendChild(contentEl);

        divButtons.appendChild(deleteBtn);
        divButtons.appendChild(archiveBtn);
        article.appendChild(divButtons);
        document.querySelector("main section").appendChild(article);

        title.value = '';
        category.value = '';
        creator.value = '';
        content.value = '';

        deleteBtn.addEventListener('click', delets);

        function delets() {
            document.querySelector('main section').removeChild(article)
        }

        archiveBtn.addEventListener('click', archive);

        function archive() {

            let olElement = document.querySelector('ol')
            let liElement = document.createElement('li');
            liElement.textContent = titleEl.textContent;
            olElement.appendChild(liElement);


            let ordered = Array.from(document.querySelectorAll('li')).sort((a, b) => a.textContent.localeCompare(b.textContent))
            olElement.innerHTML = ordered.map(li => li.outerHTML).join('')
            document.querySelector('main section').removeChild(article)

        }

    }
}