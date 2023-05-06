console.log("dom");
const link = document.querySelector('a');
console.log(link?.href)

const link1 = document.querySelector('a')!;
console.log(link1.href);

const form = document.querySelector('form')!;
const form1 = document.querySelector('.new-item-form')!;
const form2 = document.querySelector('.new-item-form') as HTMLFormElement;

const cars = document.querySelector('#cars') as HTMLSelectElement;
let fname = document.querySelector("#fname") as HTMLInputElement;

console.log(cars.value);
console.log(fname.value);

// create a event listener function

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(cars.value,fname.value);
})