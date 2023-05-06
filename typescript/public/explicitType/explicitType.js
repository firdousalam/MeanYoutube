"use strict";
let ffname;
let fage;
let fustatus;
let faddress = []; // initializing empty error
//union types
let mixes = []; // can hold string or number ot boolean values
mixes.push("test");
mixes.push(20);
mixes.push(true);
console.log(mixes);
let mix; // con hold string or number 
//mix = "mix string";
mix = 30;
console.log(mix);
//objects
let obj1; // can hold array or object
obj1 = { "name": "test", "age": 20 };
//obj1.skill = "test";  this will wont work
let obj2;
obj2 = { "name": "test", "age": 20, "skill": "typescript" };
