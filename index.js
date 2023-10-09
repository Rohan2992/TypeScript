"use strict";
function greet(person) {
    console.log(person, features);
    return ("Hello, " + person.name + " glad to hear you r " + person.age + " years old.");
}
let greetMsg = greet({ name: "Rohan", age: 21, gender: "male", hairColor: "black", color: "white", nationality: "Indian" });
console.log(greetMsg);
