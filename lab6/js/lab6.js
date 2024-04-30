// index.js - Lab 6
// Author: Jordan Price
// Date: April 29, 2024

// Define Variables 
myTransport = ["Subaru Baja", "bike", "walking", "bus"];

//create an object for my main ride 
myMainRide = {
  make: "Subaru",
  model: "Baja",
  color: "Black",
  year: 2006,

  age : function () {
    return 2024 - this.year;

  }
}


// output
document.writeln("Kinds of transportation I use ", myTransport, "</br");
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
