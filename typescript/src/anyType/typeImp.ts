import {stringNum,sNumBol,objComb} from './anytype'

let details : string|number;
details = 10; 
details = "hero";

let details1 : stringNum;
details1 = 10; 
details1 = "hero";
const fun = ((data :sNumBol,dataDetails : objComb )=>{
    console.log(dataDetails);
})
fun(12,{ name: "test",
    uid: "bb123",
    status: "active"}
    );