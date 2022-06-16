"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey Jr.",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500,
    };
    //   const { poder, vision } = avengers; //Desestructura el objeto sin importar el orden de las propiedades
    //   console.log(poder.toFixed(2), vision.toUpperCase());
    //   const printAvenger = (avengers:Avengers) => {
    //     console.log(avengers.vision);
    const printAvenger = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
        console.log(ironman, resto);
    };
    //   printAvenger(avengers);
    const avengersArr = ["Cap. América", "IronMan", "Hulk"];
    //   const ironman = avengersArr[1];
    //   console.log({ ironman });
    const [capi, ironman] = avengersArr; //Al desestructurar un arreglo podemos ponerle el nombre que queramos a lo que estemos desestructurando
    console.log(ironman, capi);
})();
