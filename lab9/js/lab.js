//Author: Aurora Aguilar
//Date: 11/4/2024

// add button to challenge section
$("#Challenge").append("<button id='button-Challenge'>Make Special</button>");
// add a click listener to the challenge button
$("#button-Challenge").click(function(){
    //add "special" class to the section
    $("#Challenge").toggleClass("special");
});

$("#Reflection").append("<button id='button-Reflection'>Make Special</button>");
$("#button-Reflection").click(function(){
    $("#Reflection").toggleClass("special");
}); 

$("#Problems").append("<button id='button-problems'>Make Special</button>");
$("#button-problems").click(function(){
    $("#Problems").toggleClass("special");
});