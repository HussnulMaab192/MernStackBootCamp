// // const addition = (num1, num2) => num1 + num2;
// // const subtraction = (num1, num2) => num1 - num2;
// // const multiplication = (num1, num2) => num1 * num2;
// // const division = (num1, num2) =>
// //   console.log("🚀 ~ file: tasks.js ~ line 5 ~ division", division(7, 5));

// // {
// //   if(num1 > num2) {
// //     return num1 / num2;
// //   } else {
// //     return "First number must be greater than number 2 ";
// //   }
// // }

// // console.log(
// //   "🚀 ~ file: tasks.js ~ line 4 ~ multiplication",
// //   multiplication(7, 6)
// // );
// // console.log("🚀 ~ file: tasks.js ~ line 2 ~ addition", addition(5, 7));
// // console.log("🚀 ~ file: tasks.js ~ line 4 ~ subtraction", subtraction(5, 7));

// function cToF(celsius) {
//   console.log( celsius + "\xB0C is " +(celsius * 9) / 5 + 32 + " \xB0F.");
// }

// function fToC(fahrenheit) {
//   var message = fahrenheit + "\xB0F is " + ((fahrenheit - 32) * 5) / 9 + "\xB0C.";
//   console.log(message);
// }
// cToF(60);
// fToC(45);

// function converter(temp, type) {
//  type=="C"?cToF(temp):fToC(temp)
// }

// converter(70, "C");



const multiply =(arr,num)=>{
  var newArray = [];
for (let index = 0; index < arr.length; index++) {
      newArray.push(arr[index]*num);
}
return newArray;
}

console.log(multiply([1,2,3],5))