//Author: Aurora Aguilar
//Created: 10.29.2024


//sortusnm() - func takes user input and sorts letters

function sortedusername(){
    //gets input from user
    let username = window.prompt("Input name to be sorted");
    //splits the name, sorts it, and joins the name again in sorted order
    let sortedname = username.split('').sort().join('');

    return sortedname;
}

//calls the function
let sortnameres = sortedusername();
//outputs
document.writeln("Your name sorted: " + sortnameres);