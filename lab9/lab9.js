// Lab 9: Libraries and jQuery
// Author: Jordan Price
// Date: May 13, 2024

// Constants

// Functions

//add button to challenge section 
$("#challenge").append("<button id='launchButton'>Make Special</button>");

//add a click listener to the challenge button
$("launchButton").click(function(){
    //now add the "special" class to the section
    $("#challenge").toggleClass("special");
});
  
  function main() {
    console.log("Main function started.");
    // the code that makes everything happen
  }
  

  main();
