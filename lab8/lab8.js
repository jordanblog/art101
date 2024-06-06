/*
* Author: Jordan Price
* Created: 6 May, 2024
*/

function myCalculation(x) {
    var results = x * 2
    return results;
}

array = [40, 12, 60, 15, 25, 336]
console.log("My array", array);

var result = array.map(myCalculation);
// should return [80, 24, 120, 30, 50, 672]
console.log("Test array", result);

var result = array.map(myCalculation(x) ,{
    return: x * 2,
})
// should return [80, 24, 120, 30, 50, 672]

var result = array.map(myCalculation(x) ,{
    return: x * 10,
})
// should return [400, 120, 600, 150, 250, 3360]
console.log("My array * (x)", result);

