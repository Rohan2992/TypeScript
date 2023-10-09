interface Person {
  name: string;
  gender: string;
  age: number;
  features: characteristics
}

interface characteristics {
  hairColor: string;
  color: string;
  nationality: string;
}

class livingBeings implements Person {
  name: string;
  gender: string;
  age: number;
  features: characteristics;

  constructor(name: string, gender: string, age: number, hairColor: string, color: string, nationality: string) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.features = { hairColor: hairColor, color: color, nationality: nationality };
  }
  greet(): string {
    console.log(this.features);
    return ("Hello, " + this.name + " glad to hear you r " + this.age + " years old.");
    // return { name: "Rohan", gender: "male", age: 21, features: { hairColor: "black", nationality: "Indian", color: "brown" } };
  }
}

const personObject = new livingBeings("Rohan", "male", 21, "black", "Indian", "brown");
const op = personObject.greet();
console.log(op);