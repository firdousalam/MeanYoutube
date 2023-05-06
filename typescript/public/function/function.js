"use strict";
let greet;
greet = (() => {
    console.log("hello , again");
});
const add = ((a, b, c) => {
    console.log(a + b);
});
add(13, 5); // third parameter is optional accept number or string
const adddef = ((a, b, c = 10) => {
    console.log(a + b);
});
adddef(13, 5, 77); // third parameter is optional accept number or string
adddef(13, 5); // third parameter is optional if no data passed it will have value 10
const minus = ((a, b) => {
    return a - b;
});
