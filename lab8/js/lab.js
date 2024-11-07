//Author: Aurora Aguilar
//Created: 10.29.2024

function add27(x){
    return x + 27;
}

console.log("Adding 27 to 20: ", add27(20));
console.log("Adding 27 to 67: ", add27(67));

array = [1,2,3,4,5,6,27,15,32,80];
console.log("My array: ", array);

var addres = array.map(add27);
console.log("Adding 27: ", addres);

var mult27 = array.map(function(x) {
    return x * 27;
})

console.log("Multiplying 27: ", mult27);