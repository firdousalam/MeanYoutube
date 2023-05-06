"use strict";
exports.__esModule = true;
var name = { name: "firdous" };
var nameAgeObj = { name: "firdous", age: 20 };
if ('name' in nameAgeObj) {
    nameAgeObj.name;
}
if ('age' in nameAgeObj) {
    nameAgeObj.age;
}
if ('name' in nameAgeObj && 'age' in nameAgeObj) {
    nameAgeObj.name;
    nameAgeObj.age;
}
console.log(nameAgeObj);
