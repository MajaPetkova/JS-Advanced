function subtract() {
    let firstNum = document.getElementById('firstNumber');
    let firstNumber = Number(firstNum.value);


    let secondNum = document.getElementById('secondNumber');
    let secondNumber = Number(secondNum.value);

    let result = firstNumber - secondNumber;
    let resultEl = document.getElementById('result');
    resultEl.textContent = result;


}