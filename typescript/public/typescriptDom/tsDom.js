"use strict";
console.log("dom");
const link = document.querySelector('a');
console.log(link === null || link === void 0 ? void 0 : link.href);
const link1 = document.querySelector('a');
console.log(link1.href);
const form = document.querySelector('form');
const form1 = document.querySelector('.new-item-form');
const form2 = document.querySelector('.new-item-form');
const cars = document.querySelector('#cars');
let fname = document.querySelector("#fname");
console.log(cars.value);
console.log(fname.value);
// create a event listener function
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(cars.value, fname.value);
});
