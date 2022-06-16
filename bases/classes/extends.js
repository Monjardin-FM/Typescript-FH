"use strict";
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Constructor Avener llamado");
        }
        getFullname() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("Constructor Xmen llamado");
        }
        getFullnameDesdeXmen() {
            console.log(super.);
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan");
    console.log(wolverine);
})();
