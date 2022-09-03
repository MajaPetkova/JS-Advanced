function solve() {
    let addBtn = document.getElementById('add');
    let taskElement = document.getElementById('task');
    let descriptionElement = document.getElementById('description');
    let dateElement = document.getElementById('date');
    addBtn.addEventListener('click', onClick);

    let allSections = Array.from(document.querySelectorAll('section'));
    let openSection = allSections[1];
    let inProgressSection = allSections[2];
    let complete = allSections[3];

    // function for testing reason
    // taskElement.value = 'Testing'
    // descriptionElement.value = 'Doing tests';
    // dateElement.value = '17-12-2021'

    function onClick(e) {
        e.preventDefault();

        if (taskElement.value && descriptionElement.value && dateElement.value) {

            let openDiv = openSection.querySelectorAll('div')[1];
            let openArticle = document.createElement('article');

            let h3El = document.createElement('h3');
            h3El.textContent = taskElement.value.trim();
            openArticle.appendChild(h3El)

            let pEl = document.createElement('p');
            pEl.textContent = `Description: ${descriptionElement.value.trim()}`;
            openArticle.appendChild(pEl)

            let pDate = document.createElement('p');
            pDate.textContent = `Due Date: ${dateElement.value.trim()}`
            openArticle.appendChild(pDate);

            let divElement = document.createElement('div');
            divElement.classList.add('flex');
            openArticle.appendChild(divElement)

            let greenBtn = document.createElement('button');
            greenBtn.classList.add('green');
            greenBtn.textContent = 'Start';
            divElement.appendChild(greenBtn);

            let redBtn = document.createElement('button');
            redBtn.classList.add('red');
            redBtn.textContent = 'Delete';
            divElement.appendChild(redBtn);

            openDiv.appendChild(openArticle);
            clearInput();

            greenBtn.addEventListener('click', processTask)
            redBtn.addEventListener('click', removeTask)


            function processTask() {
                let progressDiv = document.getElementById('in-progress')
                progressDiv.appendChild(openArticle);

                greenBtn.remove();

                let finishBtn = document.createElement('button');
                finishBtn.textContent = 'Finish';
                finishBtn.classList.add('orange')
                divElement.appendChild(finishBtn);

                finishBtn.addEventListener('click', completeTask)

                function completeTask() {
                    let completeDiv = complete.querySelectorAll('div')[1];
                    completeDiv.appendChild(openArticle);
                    divElement.remove()
                }
            }

            function removeTask() {
                redBtn.parentElement.parentElement.remove();
            }

            function clearInput() {
                taskElement.value = '';
                descriptionElement.value = '';
                dateElement.value = '';
            }
        }
    }
}