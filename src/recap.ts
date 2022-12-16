const myName = 'Jhonatan';
const myAge = 45;
const suma = (a: number, b: number) => {
    return a + b;
}
suma(5, 6);

class Person {
    constructor(
        private age: number, 
        public name: string
    ) {}

    getSummary() {
        return `my name is ${this.name} i'm ${this.age}`;
    }
}

const jhonatan = new Person(66, 'Jhonatan');
jhonatan.getSummary();
