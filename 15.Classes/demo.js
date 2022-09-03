class Person {
    constructor(name, age = 18) {
        this.name = name;
        this.age = age;

    }
    sayHello() {
        console.log(`${this.name} says hi! I am ${this.age} years old.`)
    }
    static cheer() {
        console.log('Woo hoo!');
        console.log(this.newMethod())
    }
    static newMethod() {
        return 5;
    }
    static compareTo(a, b) {
        return a.age - b.age;
    }
}
const person1 = new Person('Peter', 28);
const person2 = new Person('George');
const person3 = new Person('Mary', 25)
person1.height = 178;

// person1.sayHello();
// console.log(person1);
// console.log(person2);

// Person.cheer();

const people = [person1, person2, person3];
people.sort = (Person.compareTo);
console.log(people)
    // console.log(person1 instanceof Person)

// const myLiteral = {
//     name: 'Peter',
//     age: 18,
//     sayHello() {

//     }
// }