function solve() {
    let buttonElement = document.querySelector('.admin-view .action button')
    let modules = {}
    buttonElement.addEventListener('click', (e) => {

        e.preventDefault();

        let lectureNameElement = document.querySelector('input[name="lecture-name"]');
        let lectureDateElement = document.querySelector('input[name="lecture-date"]')
        let lectureModuleElement = document.querySelector('select[name="lecture-module"]')
            // console.log(lectureModuleElement.value)

        if (lectureNameElement.value == '' || lectureDateElement.value == '' && lectureModuleElement.value == 'Select module') {
            return;
        }
        if (!modules[lectureModuleElement.value]) {
            modules[lectureModuleElement.value] = [];
        }
        let currentLecture = {
            name: lectureNameElement.value,
            data: formatDate(lectureDateElement.value)
        }

        modules[lectureModuleElement.value].push(currentLecture)


        let liEl = document.createElement('li');
        liEl.classList.add('flex');

        let courseHeadingEl = document.createElement('h4')
        courseHeadingEl.textContent = `${lectureNameElement.value} - ${formatDate(lectureDateElement.value)}`
        console.log(formatDate(lectureDateElement.value))

        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('red');

        liEl.appendChild(courseHeadingEl);
        liEl.appendChild(deleteBtn)

        createTrainings(modules)
    })

    function createTrainings() {
        let modulesElement = document.querySelector('.modules')

        for (let moduleName in modules) {
            let moduleElement = createModule(moduleName)
            let lectureListEl = document.createElement('ul');

            let lectures = moduleName[moduleName]
            lectures
                .sort((a, b) => a.date.localeCompare(b.date))
                .forEach(({ name, date }) => {
                    let lectureElement = createLecture(name, date)
                    lectureListEl.appendChild(lectureElement)
                })
            moduleElement.appendChild(lectureListEl)
            modulesElement.appendChild(moduleElement)
        }


    }

    function createModule(name, lectureElement) {
        let divElement = document.createElement('div');
        divElement.classList.add('module');

        let headingElement = document.createElement('h3')
        headingElement.textContent = `${name.toUpperCase()}-MODULE`;

        divElement.appendChild(headingElement);

        return divElement

    }

    function createLecture(name, date) {
        let liEl = document.createElement('li');
        liEl.classList.add('flex');

        let courseHeadingEl = document.createElement('h4')
        courseHeadingEl.textContent = `${name} - ${formatDate(date)}`
            // console.log(formatDate(date))

        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'del';
        deleteBtn.classList.add('red');

        liEl.appendChild(courseHeadingEl);
        liEl.appendChild(deleteBtn)

        return liEl
    }

    function formatDate(dateInput) {
        //2021-06-08T06:55
        let [date, time] = dateInput.split('T')
        date = date.replace(/-/g, '/')

        return `${date} - ${time}`
    }
};