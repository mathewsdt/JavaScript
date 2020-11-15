var x=22; //created an global variable named x with a value of 22//
function add_numbers_1() { //created a function and named it add_numbers_1//
    document.write(22 + x + "<br>");//used the document.write method to display my function//
}
function add_numbers_2() {//created an function named add_numbers_2//
    document.write(x + 100 +"<br>" );//used the document.write function to display my funcion that will used global variable x//
}
add_numbers_1();//calling my function//
add_numbers_2();//calling my function//

function add_numbers_3() { //created an function named add_numbers_3//
    var p = 15;// created a variable named p with a value of 15//
    document.write(30 + p + "<br>");//used to document write method to display our function//
}
function add_numbers_7() {//created function named add_numbers_7//
    document.write(p + 100);//used document write method to display function with variable p which will not display because p is undefined is this funtion//
}
add_numbers_3();//calling my function//
add_numbers_7();//calling my functuon//

function subtract_numbers_1() { //created a subtaction function and gave it the name subtract_numbers_1 //
    var y = 23; //created a local variable named y with a value of 23//
    console.log(44 - y); //used console.log to debug code//
}
function subtract_numbers_2() { //created a subtraction function and gave it the name subtract_numbers_2 //
    var y = 15;//created a local variabled named y with a value of 15//
    console.log(x - 11);//used console log method to debug code//
}
subtract_numbers_1();// calling my function //
subtract_numbers_2();// calling my function //

function get_date() { //created  function with a name of get_date //
    if (new Date().getHours() < 19) { // created if statement of is less than 19 or 7:00pm local time //
    document.getElementById("Welcome").innerHTML = "Good day, Welcome!"//used getelementbyID method to display if , " if " statement is less than 19/7:00pm display Good day , welcome //
    }
}

function get_day() { //created function and named it get_day//
    if (new Date().getDay() < 1) { // created an if statement using the getday method //
    document.getElementById("Get").innerHTML = "Get up, theres work to do!" // used the document getelementbyid method to display get up theres work to if the day is less then 1 or monday //
    }
}

function drink_function() { // created a function named drink_function //
    Age = document.getElementById("Age").value; //used to the getelementbyid method to call our age id //
    if (Age >= 21) { //created an if statment//
        Drink = " You can drink"; // if , if stament is true display you can drink //
    }
    else { 
        Drink = " You can not drink";// if, if statment is false display can not drink //
    }
    document.getElementById("can_you_drink").innerHTML = Drink;//used getelementbyid method to call our button in html file //
}

function Time_function() { //created function and named it Time function //
    var Time = new Date().getHours();//created variable with a value time//
    var Reply;//created variable with reply value for else if statement //
    if (Time < 12 == Time > 0) { //created if stamentment//
        Reply = "It is morning time.";//created reply for if, if statement is true //
    }
    else if (Time > 12 == Time < 18) { //created else if statement//
        Reply = "It is the afternoon.";//created reply for if statement if statment is true //
    }
    else {
        Reply = "It is evening time."; // created reply for of statment if statements above are false //
    }
    document.getElementById("Time_of_day").innerHTML = Reply; // used getelementbyid method to display one of the three replys //
}
