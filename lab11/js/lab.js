//Author: Aurora Aguilar
//Created: 11.11.2024

// sort function
function sortString(inputString) {
    return inputString.split('').sort().join(''); //from lab 7
  }

// click listener for button
$("#submit").click(function(){
    const inputname = $("#inputname").val(); // gets input
    inputSorted = sortString(inputname); // sorts input
    $("#output").html('<div class="text"><p>' + inputSorted + '</p></div>');
});
