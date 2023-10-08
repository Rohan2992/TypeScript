function sumOfNumbers(a: number, b: number): number {
  return a + b;
}

const addition = sumOfNumbers(5, 4);
console.log(addition);

function calculate(a: number, b: number, type: string): number | undefined {
  if (type === "add") return a + b;
  else if (type === "sub") return a - b;
  else if (type === "mul") return a * b;
  else if (type === "div") return a / b;
  return -1;
}

const cal = calculate(5, 4, "");
console.log(cal);
