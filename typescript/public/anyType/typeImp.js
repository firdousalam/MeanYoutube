"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let details;
details = 10;
details = "hero";
let details1;
details1 = 10;
details1 = "hero";
const fun = ((data, dataDetails) => {
    console.log(dataDetails);
});
fun(12, { name: "test",
    uid: "bb123",
    status: "active" });
