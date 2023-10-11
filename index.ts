// how to pass array as argument


function firstElement<T>(arr: T[]): T {
  return arr[0];
}

const ans = firstElement<number>([1, 2]);
const ans1 = firstElement<string>(["1", "2"]);

// ans1.tolowerCase();

console.log(ans, ans1)
