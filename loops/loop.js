//for loop
for(let count = 1; count<=10 ; count++){
    document.write(count+ " times 7 is " + count*7 + "<br/>");
}

document.write("<br><br>")
//while loop
document.write("While Loops Example");
document.write("<br><br>")
let counts = 1;
while(counts <= 10){
    document.write( counts + " times 2 is " + counts*2 + "<br/>");
    counts++;  
}
document.write("<br><br>");

//Do while Loop
document.write("Do While Example");
let number = 1;
document.write("<br>");

do{
    document.write( number + " times 3 is " + number*3 + "<br/>");
    number++;
}
while(number<=10);

document.write("<br><br>");

//Searching for a key at specific location
haystack = new Array()
haystack[17] = "Needle"
for (j = 0 ; j < 20 ; ++j){
if (haystack[j] == "Needle") {
document.write("<br/>- Found at location " + j)
document.write("<br>");
continue;                    //continue searches until the condition is fulfilled where break terminates from where the key is found and executes the result.
} else {
document.write(j + ", ");
}
console.log("where is sushant ??");
}


