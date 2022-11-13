// Functions
function myfunction(string) {
  // these functions accupies more memory
  // these functions requires more lines of code!

  let funtionsyntax = console.log("function syntax");
  return string + funtionsyntax;
  // return is compulsory
}
console.log("🚀 ~ file: functions.js ~ line 11 ~ myFunction", myfunction("hello"));
//Arrow Functions
// as we are not going to chage the funcionalities of functions so we can use here let!
const myFunction = (string) => {
         //() parantheses ya Argument missinf=g hai!
  // => flat arrow!
  let showConsole = console.log("My Function");
  return showConsole + string;
  // return is optional
};

myFunction("second Functions");
console.log("🚀 ~ file: functions.js ~ line 22 ~ myFunction", myFunction);

//Anonymus Functions
// ()=>{}

//Extensions
// prettear --it formats the code
// Turbo console log -- it show on console !
