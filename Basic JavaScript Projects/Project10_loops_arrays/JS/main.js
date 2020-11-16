function Call_loop() { // created a loop function with a name of call loop //
    var Digit = ""; // created variable named Digit with no value //
    var x = 1; //created variable with value of one //
    while (x < 21) { //created while loop statement , while x is less than 21 run loop //
        Digit += "<br>" + x; // create a line break between each variable less than 21 //
        x++; // if while statment is true addone to variable x //
    }
    document.getElementById("Loop").innerHTML = Digit; // display value of each loop with byid method //
}

var Instruments = ["Drums", "Piano", "Bass", "Violin", "Trumpets", "Flute"] ; // created variable instruments for a for loop with know iterations //
var content = "";
var Y;
function for_loop() { 
    for (Y = 0; Y < Instruments.length; Y++) { // created for condition statement . with assigning variable y a value . if Y is less than instrument.length addone to y value and continue loop //
    content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content; // use getelementbyid method to display our list from the loop //
}

function array_Function() { // created an array function //
    var dom_picture = [];// gave variable a value of dom_picture //
    dom_picture[0] = "eating";// gave dom_picture indexes from position 0-3 all values //
    dom_picture[1] = "lifting";
    dom_picture[2] = "playing video games";
    dom_picture[3] = "driving a Mclaren";
    document.getElementById("Array").innerHTML = "In this picture, dom is " + 
    dom_picture[3] + "."; // used getelementbyid method to create sentence using dom_picture variable //
}

function constant_function() { // created constant function //
    const exotic_cars = {dealer:"BMW", body:"sedan", drive:"AWD"} // created a constant variable with values dealer , body, and drive //
    exotic_cars.color = "black";// added in color variable //
    exotic_cars.price = "100k";// added in price variable //
    document.getElementById("constant").innerHTML = "Over at " + exotic_cars.dealer + " we have " +
    exotic_cars.drive + " vehicles at the cheapest prices around "; // created sentence using elementbyid method along with constant variables //
}

function let_function() { // let function //
var x = 44; //created variable and declared value 44 //
document.write(x);
{
    let x = 73; // created let and gav it a variable x with value of 73 //
    document.write("<br>" + x);
}
document.write("<br>" + x); // used document.write method throughtout function to display my value of var x and let x //
} 

let dog = { // created object function //
    breed: "pitbull ", // gave my object properties //
    color: "black ",
    age: "3 year old ",
    active: "high ",
  description: function() { // created a describtion function for my object //
        return " This dog is a " + this.age + this.color + this.breed; // used return method to create sentence using my object properties //
    }
} ;
document.getElementById("dog_object").innerHTML = dog.description(); 