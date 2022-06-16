"use strict";
(() => {
    class Avenger {
        // constructor(name: string, team: string, realName?: string) {
        //   this.name = name;
        //   this.team = team;
        //   this.realName = realName;
        // }
        constructor(name, team, realName //   avgAge: number = 55
        ) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            //   Avenger.avgAge = avgAge;
        }
        static getAvgAge() {
            return this.name;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    // private name: string;
    // public team: string;
    // public realName: string;
    Avenger.avgAge = 35;
    const antman = new Avenger("Antman", "Capitan", "Scott Lang");
    console.log(antman);
    //   console.log(Avenger.avgAge);
    console.log(Avenger.getAvgAge());
})();
