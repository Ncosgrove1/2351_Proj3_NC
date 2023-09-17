const name = "Nathan is very loud" ;

console.log("Below is a simple function that is envoked")

function repeat() {
console.log("Repeat after me#1"); 
console.log("Repeat after me#2"); 
console.log("Repeat after me#3"); 
}

repeat() ;

console.log("Below is a function that has set parameters in and out");

function adder(num1, num2) {
console.log(num1 + num2)
}

adder(60, 40);


function changetext() {
    const button = document.getElementById("btn").innerHTML = "See how the text changed!";
    }
