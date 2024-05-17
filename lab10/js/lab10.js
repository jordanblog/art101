/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Jordan Price
   Date: 2024
*/


// Function to generate random text
function generateRandomText() {
  const text = ["Purple", "Blue", "Magenta", "Green", "Orange", "Red", "Lavender", "White", "Beige", "Amber",]
  const min = 1;
  const max = 1;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

// Click listener for button
$("#make-convo").click(function(){
  // Get new fake dialogue
  const newText = generateRandomText();
  // Replace the content of the output div with new text
  $("#output").html('<div class="text"><p>' + newText + '</p></div>');
});
