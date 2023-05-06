"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let name = { name: "firdous" };
let nameAgeObj = { name: "firdous", age: 20 };
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
