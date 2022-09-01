function solve(arr) {
    let sum = 0;
    let concat = "";
    let secondSum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        concat += arr[i] + "";
        secondSum += 1 / arr[i];
    }

    console.log(sum);
    console.log(secondSum);
    console.log(concat);

}
solve([1, 2, 3])