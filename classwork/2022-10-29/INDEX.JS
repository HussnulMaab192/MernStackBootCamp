function fn() {
    var obj=123;
    for (var i = 0; i < 10; i++) {
        console.log(i);
        
    }
}
function fn1() {
    var obj=123;
    for (var i = 0; i < 10; i++) {
        console.log(obj);
        
        
    }
}

function fn3() {
    // var obj=123;
    for (var i = 0; i < 10; i++) {
        
        // console.log(i);
        
    }
    console.log(i);
}

function fn4() {
    // var obj=123;
    for (let i = 0; i < 10; i++) {
        
         console.log(i);
        
    }
    // console.log(i);
}
// fn1();

// fn4();


// object declaration as well as call or access..
let student={
    name:"hamza",
    address:{
        city:"rawalpindi",
        country:"pakistan"
    },
    rollno:123,
    class:"Mern-develepment"
}
// console.log(student.address["city"]);
// console.log(student["address"]["city"]);
// console.log(student.address.city);
console.log(student.address);
// console.log(student["name"]);
