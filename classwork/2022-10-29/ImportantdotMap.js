// why we will use this?
// we can use it with in html as well  as javascript
// it return us new modified array but without disturbing original array...

const Arr = [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13];

for(let i=1;i<=50;i++){
    if(i%3==0 || i%5==0)
    {
        if(i%3==0)
        {
        console.log("Fuzz");
    }else if(i%5==0){
        console.log("buzz");
    }
    }
    if(i%7==0)
    {
        console.log("buzz");
    }
    else{
        console.log(i);
    }
}
// first task:

// console.log(
//   Arr.map((chk) => {
//     return {
//       number: chk,
//     };
//   })
// );

// second task:

// console.log(Arr.map((chk)=>{
//     return chk*2;
// }));

// to find : value lets check is it appropriate method or not?lets see...
// console.log(Arr.map((chk)=>{
//     if(chk==3)
//     {
//     return chk;
//     }
// }));


