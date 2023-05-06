
export type Name = {name :string};
export type Age = {age :number};
type union = Name | Age | (Name & Age); // without | (Name & Age) typescript will give error


let name: Name = {name : "firdous"};
let nameAgeObj : union = {name : "firdous",age : 20};
if('name' in nameAgeObj){
    nameAgeObj.name
}
if('age' in nameAgeObj){
    nameAgeObj.age
}
if('name' in nameAgeObj && 'age' in nameAgeObj){
    nameAgeObj.name;
    nameAgeObj.age
}
