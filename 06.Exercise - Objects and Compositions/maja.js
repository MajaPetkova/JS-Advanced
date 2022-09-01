//proba1
// let objBig = {};
// let obj = {
//     n: 15,
//     age: 331,
//     test: ""
// }

// if (obj.n >= 15) {
//     obj.n += 8
// }
// obj.age = 30;

// proba2//
// let obj1 = {
//     name: "Maja",
//     age: 30,
//     pets: {
//         cat: "Vesi",
//         dog: "Mesi"
//     }

// }
// for (let [key, value] of Object.entries(obj1)) {
//     console.log(value.cat)
// }
// if (obj1.pets.cat === "Vesi") {
//     obj1.pets.dog = "Dogi"
// }
// console.log(obj1.pets.dog)

//Proba3
let bigObj = {}
let names = "maja";
let age = 30;
let pets = "cat"

// bigObj[names] = {
//     age,
//     pets: {
//         cat: "Nancho",
//         dog: "Mirko"
//     }
// }

if (!bigObj.hasOwnProperty(names)) {
    bigObj[names] = {}
}
// if (bigObj.hasOwnProperty(names)) {
//     bigObj[names][pets] = {};
// }
console.log(bigObj)
    // if (bigObj[names].pets.dog) {
    //     bigObj[names].pets.dog = "Mancho"
    // }
    // for (let [key, value] of Object.entries(bigObj)) {
    // console.log(value.pets.cat)
    // console.log(value)
    // }
    // bigObj[pets] = {};
    // bigObj[pets] = names
    // console.log(bigObj)

//primer4
// let nums = [1, 2, 3, 4];

// let [a, b, ...rest] = nums;
// console.log(rest)