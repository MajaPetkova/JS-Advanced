function attachEventsListeners() {
    let inputField = document.getElementById('inputDistance');
    let outputField = document.getElementById('outputDistance');

    let fromOption = document.querySelector('#inputUnits');
    let toOption = document.querySelector('#outputUnits');

    let convertBtn = document.getElementById('convert');
    convertBtn.addEventListener('click', onClick)

    function onClick() {
        let inputElementValue = Number(inputField.value);
        let result = 0;

        switch (fromOption.value) {
            case 'km':
                inputElementValue *= 1000;
                break;
            case 'm':
                inputElementValue = inputElementValue;
                break;
            case 'cm':
                inputElementValue *= 0.01;
                break;
            case 'mm':
                inputElementValue *= 0.001;
                break;
            case 'mi':
                inputElementValue *= 1609.34;
                break;
            case 'yrd':
                inputElementValue *= 0.9144;
                break;
            case 'ft':
                inputElementValue *= 0.3048;
                break;
            case 'in':
                inputElementValue *= 0.0254;
                break;
        }

        switch (toOption.value) {
            case 'km':
                result = inputElementValue / 1000;
                break;
            case 'm':
                result = inputElementValue;
                break;
            case 'cm':
                result = inputElementValue / 0.01;
                break;
            case 'mm':
                result = inputElementValue / 0.001;
                break;
            case 'mi':
                result = inputElementValue / 1609.34;
                break;
            case 'yrd':
                result = inputElementValue / 0.9144;
                break;
            case 'ft':
                result = inputElementValue / 0.3048;
                break;
            case 'in':
                result = inputElementValue / 0.0254;
                break;
        }
        outputField.value = result
    }
}