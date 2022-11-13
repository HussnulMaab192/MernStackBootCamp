// Arrays can be string,integars type character type....
const array1=["1","2","3","4","shaizad","6","7","8"]
const array2=[1,2,3,4,5,6,6,7,8,9,6];
// console.log(array1[3]);
// array.find()=>used to search data in the loop
// for(let i=0;i<array1.length;i++){
//     if(i=="4")
//     {
//         console.log(i);
//     }
// }

// array.find(function fn(arg))
// function fn(arg){
//     if(arg=="4"){
//         return arg;
//     }
// }
//to find the array in the for loop
//  console.log(array1.find((arg)=>(arg=="4")))
//to find the array in the for loop and return array value if it exists like ['4']
 console.log(array1.filter((arg)=>(arg=="shaizad")))
// array1.shift();............to delete array
// console.log(array1[0]);