// Lab 9: Libraries and jQuery
// Author: Jordan Price
// Date: May 13, 2024

// Constants

// Functions
$(document).ready(function() {
// Add button to sections
$("#minor-section").append("<button id='blue-button'>Click Here</button>");
$("#problems").append("<button id='green-button'>Click Here</button>");
$("#reflection").append("<button id='purple-button'>Click Here</button>");
$("#results").append("<button id='red-button'>Click Here</button>");

// Color change button for Challenge Section
$("#blue-button").click(function(){
    $("#challenge-minor-section").toggleClass("challengespecial");
})

// Color change button for Problems Section
$("#green-button").click(function() {
    $("#problems").toggleClass("problemsspecial");
})

// Color change button for Reflection Section
$("#purple-button").click(function() {
    $("#reflection").toggleClass("reflectionspecial");
})

// Color change button for Results Section
$("#red-button").click(function() {
    $("#results").toggleClass("resultsspecial");
})

})

let color;


$("#my-buuton").click(
  function(){
    
    // things to happen when the button is clicked
    console.log("button is clicked");
    
    color = $("#user-name").val();
    
    console.log("color is:" + color);
    
    // output the color somewhere on the page
    
    $("BODY").append('<div id="colorOutput'+color+'">' + color + '</div>');
    
    $("#colorOutput"+color).css("color", color);
    
    
  }
);
















  
