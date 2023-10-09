type Arithmetic = "add" | "sub" | "mul" | "div";
enum Arithmetic1 { add = 1, sub, mul, div }

function calculate(a: number, b: number, type: number): number {
  if (type === 1) return a + b;
  else if (type === 2) return a - b;
  else if (type === 3) return a * b;
  else if (type === 4) return a / b;

  return -1;
}

const ans = calculate(10, 50, Arithmetic1.add);
console.log(ans);

type Arithmetic2 = {
  value: string;
  operator: string;
};

interface A2 extends Arithmetic2 {
  vs: string
}


function greet(value: A2) {
  return value
}

console.log(greet({ value: 'hello', operator: "+", vs: "code" }));