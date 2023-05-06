let ffname : string;
let fage : number;
let fustatus : boolean;
let faddress : string[] =[];// initializing empty error

//union types
let mixes : (string |number|boolean)[] = []; // can hold string or number ot boolean values
mixes.push("test");
mixes.push(20);
mixes.push(true);
console.log(mixes);

let mix: string | number;  // con hold string or number 
//mix = "mix string";
mix = 30;
console.log(mix);

//objects
let obj1 : Object; // can hold array or object
obj1 = {"name":"test","age":20};
//obj1.skill = "test";  this will wont work

let obj2 : {
    "name":string,
    "age" : number,
    "skill" : string
}
obj2 = {"name":"test","age":20,"skill":"typescript"};
