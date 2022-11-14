// Reduce method

// Sum without reduce method
const arr = [1, 2, 3, 4, 5, 5, 6];

// let sum = 0;
// for (let index = 0; index < arr.length; index++) {
//   sum += arr[index];
// }
// console.log("🚀 ~ file: notes.js ~ line 9 ~ sum", sum);

// Sum with reduce method

let totalSum = arr.reduce((acc, curr) => {
  // acc is just like sum var in uper example
  return (acc += curr);
}, 0); //0 is first value
console.log("🚀 ~ file: notes.js ~ line 18 ~ totalSum ~ totalSum", totalSum);
