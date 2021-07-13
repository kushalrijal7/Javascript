
var date = new Date();
var d = date.getDate();
var m = date.getMonth() + 1;
var y = date.getFullYear();


var dateString = (d <= 9 ? '0' + d : d) + '-' + (m <= 9 ? '0' + m : m ) + '-' + y;

document.getElementById("p1").innerHTML = dateString;

function myfunction(){
    const d = new Date();
    
    document.getElementById("root").innerHTML = d;
    }