"use strict";
(() => {
    let myCustomVariable = "Fernando";
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(myCustomVariable);
    myCustomVariable = {
        name: "Bruce",
        age: 43,
        powers: [1],
    };
    console.log(typeof myCustomVariable);
})();
