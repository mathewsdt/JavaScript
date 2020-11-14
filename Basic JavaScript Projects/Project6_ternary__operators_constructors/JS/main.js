function Ride_function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function phone(Make, Model, Provider, Color) {
    this.phone_Make = Make;
    this.phone_Model = Model;
    this.phone_Provider = Provider;
    this.phone_Color = Color;
}
var Dom = new phone("Apple", "iphone", "T-mobile", "White");
var Amanda = new phone("Samsung", "Galaxy", "Verizon", "Black");
var Zach = new phone("Google", "Pixel", "Sprint", "Ruby");
function myfunction() {
    document.getElementById("New_and_This").innerHTML =
    "Dom uses an " + Dom.phone_Model + " that uses " 
    + Dom.phone_Provider + " as a service provider";
}

function nestfunction() {
    document.getElementById("Nested_function").innerHTML = subtract();
    function subtract() {
        var starting_point = 6;
        function subtract_three() {starting_point -= 3;}
        subtract_three();
        return starting_point;
    }
}
