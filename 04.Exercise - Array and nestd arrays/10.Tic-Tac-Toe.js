function solve(arrayOfArrays) {
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    let counter = 0;

    arrayOfArrays.forEach((element, index) => {
        mainDiagonal += element[counter];
        secondaryDiagonal += element[element.length - 1 - index];
        counter++;
    });

    console.log(`${mainDiagonal} ${secondaryDiagonal}`);
}
solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"
])