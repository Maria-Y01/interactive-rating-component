// function to show hidden element
function showHiddenElement() {
    var hiddenElement = document.getElementById("thankyouState");
    if (hiddenElement.style.display === "none") {
        hiddenElement.style.display = "block";
    } else {
        hiddenElement.style.display = "none";
    }
}
//
// function to hide previous element
function hideFirstElement() {
    var showedElement = document.getElementById("ratingState");
    if (showedElement.style.display === "block") {
        showedElement.style.display = "none";
    } else {
       showedElement.style.display = "block";
    }
}
//

function showClickedNumber(number) {
    // Display the clicked number
    document.getElementById("selectionSentence").innerHTML = "You selected " + number + " out of 5";
}


// functions to change style after clicking the buttons
var clickedb1 = document.getElementById("button1");

    clickedb1.addEventListener("click", function() {
    // Add a class to the button when it is clicked
    clickedb1.classList.toggle("clicked");
    });

var clickedb2 = document.getElementById("button2");

    clickedb2.addEventListener("click", function() {
    // Add a class to the button when it is clicked
    clickedb2.classList.toggle("clicked");
    });

var clickedb3 = document.getElementById("button3");

    clickedb3.addEventListener("click", function() {
    // Add a class to the button when it is clicked
    clickedb3.classList.toggle("clicked");
    });

var clickedb4 = document.getElementById("button4");

    clickedb4.addEventListener("click", function() {
    // Add a class to the button when it is clicked
    clickedb4.classList.toggle("clicked");
    });

var clickedb5 = document.getElementById("button5");

    clickedb5.addEventListener("click", function() {
    // Add a class to the button when it is clicked
    clickedb5.classList.toggle("clicked");
    });
//

function replaceElements() {
    if (clickedb1.value === "1"  || 
        clickedb2.value === "2"  || 
        clickedb3.value === "3"  || 
        clickedb4.value === "4"  || 
        clickedb5.value === "5" ) {
            showHiddenElement();
            hideFirstElement();
            showClickedNumber(number);
        }
    else {
        alert("message");
    }
}
