let greet : Function;

greet = (()=>{
    console.log("hello , again")
})
const add =((a : number,b:number,c?:number|string)=>{  // inorder to make any parameter optonnal use ?
    console.log(a+b);
})
add(13,5);// third parameter is optional accept number or string

const adddef =((a : number,b:number,c:number|string=10)=>{  // to set default value if no value passed
    console.log(a+b);
})
adddef(13,5,77);// third parameter is optional accept number or string
adddef(13,5);// third parameter is optional if no data passed it will have value 10

const minus = ((a:number,b:number)=>{
    return a-b;
})