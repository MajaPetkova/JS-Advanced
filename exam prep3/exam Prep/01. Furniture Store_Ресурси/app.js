window.addEventListener('load', solve);

function solve() {
    const addButtonElement = document.getElementById('add');
    const modelInputEl = document.getElementById('model');
    const yearInputEl = document.getElementById('year');
    const descriptionInputEl = document.getElementById('description');
    const priceInputEl = document.getElementById('price');
    const furnitureListElement = document.getElementById('furniture-list')
    addButtonElement.addEventListener('click', (e) => {
        e.preventDefault();

        let model = modelInputEl.value;
        let description = descriptionInputEl.value;
        let year = Number(yearInputEl.value);
        let price = Number(priceInputEl.value);

        modelInputEl.value = '';
        descriptionInputEl.value = '';
        yearInputEl.value = '';
        priceInputEl.value = '';

        if (!model || !description) {
            return;
        }
        if (year <= 0 || price <= 0) {
            return;
        }

        let rowElement = document.createElement('tr');
        let modelCellElement = document.createElement('td');
        let priceCellElement = document.createElement('td');
        let actionCellElement = document.createElement('td');
        let infoButtonElement = document.createElement('button');
        let buyButtonElement = document.createElement('button');
        let contentsRowElement = document.createElement('tr');
        let yearContentEl = document.createElement('td');
        let descriptionContentEl = document.createElement('td');
        let totalPriceElement = document.querySelector('.total-price')

        modelCellElement.textContent = model;
        priceCellElement.textContent = price.toFixed(2);
        infoButtonElement.textContent = "More Info";
        infoButtonElement.classList.add('moreBtn');


        infoButtonElement.addEventListener('click', (e) => {
            if (e.currentTarget.textContent == 'More Info') {
                contentsRowElement.style.display = 'contents';
                e.currentTarget.textContent = 'Less Info'
            } else {
                contentsRowElement.style.display = 'none';
                e.currentTarget.textContent = 'More Info'
            }
        })

        buyButtonElement.textContent = "Buy it";
        buyButtonElement.classList.add('buyBtn');
        buyButtonElement.addEventListener('click', (e) => {
            let currentTotalPrice = Number(totalPriceElement.textContent);
            let totalPrice = currentTotalPrice + price;
            totalPriceElement.textContent = totalPrice.toFixed(2)

            rowElement.remove();
            contentsRowElement.remove();
        })

        actionCellElement.appendChild(infoButtonElement);
        actionCellElement.appendChild(buyButtonElement);

        rowElement.classList.add('info')
        rowElement.appendChild(modelCellElement);
        rowElement.appendChild(priceCellElement);
        rowElement.appendChild(actionCellElement);

        yearContentEl.textContent = `Year: ${year}`;
        descriptionContentEl.setAttribute('colspan', 3);
        descriptionContentEl.textContent = `Description: ${description}`;


        contentsRowElement.classList.add('hide');
        contentsRowElement.style.display = 'none';
        contentsRowElement.appendChild(yearContentEl);
        contentsRowElement.appendChild(descriptionContentEl);

        furnitureListElement.appendChild(rowElement);
        furnitureListElement.appendChild(contentsRowElement)
    })

}