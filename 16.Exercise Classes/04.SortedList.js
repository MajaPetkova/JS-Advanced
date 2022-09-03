class List {
    constructor() {
        this.result = [];
        this.size = this.result.length;

    }
    add(el) {
        this.result.push(el);
        this.size = this.result.length;
        this.result.sort((a, b) => a - b);
    }
    remove(index) {
        if (index < 0 || index >= this.result.length) {
            throw new Error('Invalid index');
        }
        this.result.splice(index, 1);
        this.size = this.result.length;
    }
    get(index) {
        if (index < 0 || index >= this.result.length) {
            // throw new Error('Invalid index!');
        } else {
            return this.result[index]
        }
    }
}
let list = new List();
list.add(5);
list.add(6);
console.log(list.get(1));
console.log(list)