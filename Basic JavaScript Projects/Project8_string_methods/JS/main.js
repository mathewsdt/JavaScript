function full_sentence () { // created an concatenate function and named it full sentence //
    var part_1 = " One day ";// created var named part with a value of one day //
    var part_2 = " I will actually ";// created a var named part 2 with a value of I will actually //
    var part_3 = " get good at ";// created var named part 3 with a value of get good at //
    var part_4 = " this whole coding thing ";// created var named part 4 with a value of this whole coding thing //
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //created variable whole sentence to concate part1 - part 4//
    document.getElementById("concatenate").innerHTML = whole_sentence; // used the document getelementbyid to display my function //
}


function slice_method() { // created function and named it slice method //
    var sentence = "I think I am starting to get a little better at Javascript" //created variable named sentence with a sentece value //
    var section = sentence.slice(31,38);// created another variable named section with java postiton I want to cut from my sentence //
    document.getElementById("slice").innerHTML = section; // used byid method to display my slice methhod //
}


function numbers() { // created function and named it numbers //
    var d = 22; // made a variable named d with a value of 22 //
    document.getElementById("numbers_strings").innerHTML = d.toString(); // used the byid method to display the number to string method //

}

function precision_method() { // created function named precision method //
    var x = 20202.3215478951; // created var x with a value of 20202.3215478951 //
    document.getElementById("precision").innerHTML = x.toPrecision(10); //used the byid method and toprecision method to display value of string position 10 //
}