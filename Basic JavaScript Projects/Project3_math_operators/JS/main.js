function my_math_function() {
    var addition = 3 + 3;
    document.getElementById("Math").innerHTML = "3 + 3 = " + addition
} //created an addition function with the document.get method to display answer//


function subtractionfunction() {
    var subtract = 7 - 5;
    document.getElementById("Math").innerHTML = "7 - 5 = " + subtract
} //created an subtraction function with the document.get method to display answer //

function multifunction() {
    var multiplication = 5 * 5;
    document.getElementById("Math").innerHTML = "5 x 5 = " + multiplication
} // created multiplication function with the document.get method to display answer //

function divfunction() {
    var division = 40 / 4;
    document.getElementById("Math").innerHTML = " 40 / 4 = " + division
} // created division function with the document.get method to display answer //

function OOOmath() {
    var orderofoperations = (5+5) * 10 / 2 - 4;
    document.getElementById("Math").innerHTML = " 5 plus 5, multiplied by 10, divided in half and then subtracted by 4 equals " + orderofoperations
} // created an multi operational function with document. get method to display method problem that uses multiple operations //

function modulus_operator() {
    var simple_math = 35 % 6;
    document.getElementById("Math").innerHTML = " when divide 35 by 6 you have a remainder of: " + simple_math;
} // created an modulus operator function with document get method to display answer //

function negation_operator() {
    var x = 40;
    document.getElementById("Math").innerHTML = -x
} // created an negation operator function with document get method to display answer //

function increment() { 
    var x = 7;
    x++;
    document.write(x);
} //created an increment function to document.write var x if it was increased //

function decrement() {
    var x = 7.33;
    x--;
    document.write(x);
} //created an decrement function to document write var x if it was decreased //

function random() {
    window.alert(Math.random() * 100)
} // created an random function to to alert user of a random number up to 100 //

function round() {
    document.getElementById("Math").innerHTML = Math.round(2.7);
  } //created an round function with the document.get method to round 2.7 up //