function my_math_function() {
    var addition = 3 + 3;
    document.getElementById("Math").innerHTML = "3 + 3 = " + addition
}


function subtractionfunction() {
    var subtract = 7 - 5;
    document.getElementById("Math").innerHTML = "7 - 5 = " + subtract
}

function multifunction() {
    var multiplication = 5 * 5;
    document.getElementById("Math").innerHTML = "5 x 5 = " + multiplication
}

function divfunction() {
    var division = 40 / 4;
    document.getElementById("Math").innerHTML = " 40 / 4 = " + division
}

function OOOmath() {
    var orderofoperations = (5+5) * 10 / 2 - 4;
    document.getElementById("Math").innerHTML = " 5 plus 5, multiplied by 10, divided in half and then subtracted by 4 equals " + orderofoperations
}

function modulus_operator() {
    var simple_math = 35 % 6;
    document.getElementById("Math").innerHTML = " when divide 35 by 6 you have a remainder of: " + simple_math;
}

function negation_operator() {
    var x = 40;
    document.getElementById("Math").innerHTML = -x
}

function increment() { 
    var x = 7;
    x++;
    document.write(x);
}

function decrement() {
    var x = 7.33;
    x--;
    document.write(x);
}

function random() {
    window.alert(Math.random() * 100)
}

function round() {
    document.getElementById("Math").innerHTML = Math.round(2.7);
  }