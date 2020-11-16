var slideIndex = 1; // Global variable slideindex  with a value of one created as a marker for which picture will show currently, when index is 1 show first picture, when 2 show picture 2 ans so on //
showSlides(slideIndex);
                                // (n) is an anonymous function passed through the inline javascript in the html or the onclick attributes //
// Next/previous controls
function plusSlides(n) { // function named plusSlides used to call the arrows to the left and right of my pictures. //
  showSlides(slideIndex += n);// showSlides here will change the css for each slide index or each picture //
}

// Thumbnail image controls
function currentSlide(n) { // function named currentSlides is used to call on the dots under the pictures to move to an exact slide //
  showSlides(slideIndex = n); // used to change the css for each slide index //
}

function showSlides(n) { //function showslides created with annoymous function n to be passed through function it //
  var i; // variable created with the value of i //
  var slides = document.getElementsByClassName("mySlides"); // variable slides created using the getbyclassname method to target each one of our myslides div classes in html file and puts them into an array //
  var dots = document.getElementsByClassName("dot"); // variable dot created and using the getbyclassname method to target dots in html file //
  if (n > slides.length) {slideIndex = 1} // here is the start of a loop with slideindex variable which is set to 1  which is also an if statement //
  if (n < 1) {slideIndex = slides.length} // here the if statement is saying if n is less than one continue the loop //
  for (i = 0; i < slides.length; i++) { // here the for statement is saying if variable of i is less than slide.length addone and continue  for loop //
      slides[i].style.display = "none"; // here every element of i is set to display style " none " //
  }
  for (i = 0; i < dots.length; i++) { // here the for statement is saying run loop variable i and add one //
      dots[i].className = dots[i].className.replace(" active", ""); // if i is less than dot.length run loop with new ++ value //
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var slideIndex = 0;
showSlides();

function showSlides() { // showslides function created //
  var i; //gave variable value I //
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) { // created for loop if i is less than slide length addone and continue loop //
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} // if statement condition if slide index is less than slide length go to slide 1 //
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds // slide will change every 4 seconds //
}



function countdown() { // created countdown function //
    var seconds = document.getElementById("seconds").value; // gave variable value of seconds and to use getelementbyid to display seconds //

    function tick() { // created function with a name of tick //
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000); 
    if(seconds == -1) { // if condition statment is seconds equal -1 than alert box will show up with message //
        alert("Time is up"); // message that will display if second equal -1 //
    }
        }
    tick() ;
}