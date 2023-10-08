function calculate(
  a: number,
  b: number,
  type: "add" | "sub" | "div" | "mul"
): number {
  if (type === "add") return a + b;
  else if (type === "sub") return a - b;
  else if (type === "mul") return a * b;
  else if (type === "div") return a / b;
  return -1;
}

let cal: number = calculate(5, 4, "");
console.log(cal);
cal = calculate(5, 4, "sub");
console.log(cal);
cal = calculate(5, 4, "mul");
console.log(cal);
cal = calculate(5, 4, "div");
console.log(cal);
