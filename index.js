"use strict";
class livingBeings {
    constructor(name, gender, age, hairColor, color, nationality) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.features = { hairColor: hairColor, color: color, nationality: nationality };
    }
    greet() {
        console.log(this.features);
        // return ("Hello, " + this.name + " glad to hear you r " + this.age + " years old.");
        return { name: "Rohan", gender: "male", age: 21, features: { hairColor: "black", nationality: "Indian", color: "brown" } };
    }
}
const personObject = new livingBeings("Rohan", "male", 21, "black", "Indian", "brown");
const op = personObject.greet();
console.log(op);
