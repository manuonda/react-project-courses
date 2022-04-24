"use strict";
var iterate = function (arr) {
    arr.forEach(function (a) {
        console.log("a : ", a);
    });
};
console.log("iterate");
// factorial :  5! : 5*4*3*2*1
var factorial = function (n) {
    if (n <= 1)
        return 1;
    return (n * factorial(n - 1));
};
