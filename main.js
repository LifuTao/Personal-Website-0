$(document).ready(function(){

// Personal Website, with JQuery
/*First, set the slideIndex to 1. (First picture)

Then call showDivs() to display the first image.

When the user clicks one of the buttons call plusDivs().

The plusDivs() function subtracts one or  adds one to the slideIndex.

The showDiv() function hides (display="none") all elements with the class name "mySlides", and displays (display="block") the element with the given slideIndex.

If the slideIndex is higher than the number of elements (x.length), the slideIndex is set to zero.

If the slideIndex is less than 1 it is set to number of elements (x.length). */
//mStart of code from W3 Schools
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
//End of code to W3Schools
// Credit to W3 Schools

});
