// const a = 10;

// const b = 2;

// function product(a,b){
//     return a*b;
// }
// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// function div(a,b){
//     return a/b;
// }
// function rem(a,b){
//     return a%b;
// }

// document.write("The product of two Element is: " +product(a,b));
// document.write("<br><br>");

// document.write("The Addition of two Element is: " + add(a,b));
// document.write("<br><br>");

// document.write("The Subtraction of two Element is: " + sub(a,b));
// document.write("<br><br>");

// document.write("The Division of two Element is: " + div(a,b));
// document.write("<br><br>");

// document.write("The Remainder of two Element is: " + rem(a,b));
// document.write("<br><br>");


document.write(fixNames("the ","csit "," cOLLEge"," asdfa"," asdfasdf"))

function fixNames(){
    var s = ""
    for(j =0; j < fixNames.arguments.length; ++j)  //argument array
    s += fixNames.arguments[j].charAt(0).toUpperCase()+ 
    fixNames.arguments[j].substr(1).toLowerCase() + ""
    return s.substr(0, s.length-1)
}