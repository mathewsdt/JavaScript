function Age_function() { 
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young to vote" : "You are old enough to vote";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

