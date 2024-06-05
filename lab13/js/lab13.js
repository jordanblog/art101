/*
   Author: Jordan Price
   Date: 2024
*/

// given a number and an object that looks like this:
// {3: "Fizz", 5: "Buzz", 7: "Boom"}
// loops over the numbers and outputs the number and the matching text
// for factors

// Get the output element (before any function calls)
var outputEl = document.getElementById("output");

function fizzBuzzBoom(maxNums, factorObj) {
    // Iterate over all of our numbers
    for (var num = 1; num <= maxNums; num++) {
        // Reset output string
        var outputStr = "";
        // Iterate over the factors we got from the HTML
        for (var factor in factorObj) {
            // Check to see if this num is a multiple of the factor
            if (num % factor == 0) {
                // If yes, then add the text to the output string
                outputStr += factorObj[factor];
            }
        }
        // Now if we have words in outputStr, format it like this " - FizzBuzz!"
        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        // Output the result to the page
        outputToPage(num.toString() + outputStr);
    }
}

function reportError(str) {
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

// Function to output to the page
function outputToPage(str) {
    outputEl.innerHTML += "<p>" + str + "</p>";
}

// Event listener for the submit button
document.getElementById("submit").addEventListener("click", function() {
    var max = document.getElementById("max").value;
    if (!max) {
        reportError("You must provide a maximum");
        return;
    }
    // Parse the maximum number (Credit to CHATGPT)
    max = parseInt(max);

//Credit to CHATGPT
    for (var i = 0; i <= 3; i++) {
        var num = document.getElementById("num" + i).value;
        var text = document.getElementById("text" + i).value;
        if (num && text) {
            factorObj[num] = text;
        }
    }

    // Clear previous output
    outputEl.innerHTML = "";

    // Call the fizzBuzzBoom function with the maximum number and factor object
    fizzBuzzBoom(max, factorObj);
});

    