// index.js - purpose and description here
// Author: Aurora Aguilar
// Date:10/24/2024

// Constants

// Functions

myTransport = ["Chevrolet"," Bcycle", " Metro Bus", " Friends Car"];

myMainRide = {
  make: "Chevrolet",
  model: "Impala",
  color: "Blue",
  year: 1964,
  age: function(){
    return 2024 - this.year;
  }
}

document.writeln("Kinds of transportation I use: ", myTransport,"</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");



// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
