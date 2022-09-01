function solve(arr, first, last) {
    let newArr = [];
    let ind1 = arr.indexOf(first);
    let ind2 = arr.indexOf(last);
    for (i = ind1; i < ind2 + 1; i++) {
        newArr.push(arr[i])

    }
    return newArr
}
console.log(solve(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'
    ],
    'Key Lime Pie',
    'Lemon Meringue Pie'
))
console.log(solve(['Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'
    ],
    'Pot Pie',
    'Smoked Fish Pie'
))