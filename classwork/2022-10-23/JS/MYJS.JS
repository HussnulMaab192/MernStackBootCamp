// let x = 5;
// document.write("<h2>" + x + "</h2>");
function add(a, b) {
  sum = parseInt(a) + parseInt(b);
  document.getElementById("rs").innerHTML = sum;
}
function showValue() {
  var dayOfMonth = 23144;
    if(dayOfMonth.NaN)
    {
        dayOfMonth=prompt("Enter the day of Month:",0);
    }
  else if(dayOfMonth < 1 || dayOfMonth > 31) {
    dayOfMonth = Number.NaN;
    alert("Day of Month must between 1 and 31");
  }
  document.write("The dayOf Month is : " + dayOfMonth);
}
// var nm2=155.1234567;
// document.write("number to fixed...155.1234567");
// document.write("<br>");
// document.write("num. to fixed() is :"+nm2.toFixed());
// document.write("<br>");
// document.write("num. to fixed(4) is :"+nm2.toFixed(4));
// document.write("<br>");
// document.write("number to prcesion...155.1234567");
// document.write("<br>");
// document.write("num. to prcesion() is :"+nm2.toPrecision());
// document.write("<br>");
// document.write("num. to prcesion(2) is :"+nm2.toPrecision(2));
// let txt="ASSASDAS";
// let length1=txt.length;
// document.write("<br>");
// document.write("value of txt is: ASSASDAS");
// document.write("<br>");
// document.write("Length of txt is: "+length1);
// if(txt.length>8 || txt.length<8)
// {
//     alert("Length is not 8..")
// }
// function CHKlngth(f) {
//     if(f.length>8 || f.length<8)
// {
//     alert("Length is not 8..")
// }
// }
// function CHKslice(f) {
//     n=f.slice(7,13);
//     alert(n);
// }
let display=x=>{
  document.getElementById('nm').innerHTML=x.name;
  document.getElementById('em').innerHTML=x.email;
  document.getElementById('ps').innerHTML=x.password;
}