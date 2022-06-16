(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log("Constructor Avener llamado");
    }
    private getFullname() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(
      name: string,
      realName: string,
      public isMutant: boolean
    ) {
      super(name, realName);
      console.log("Constructor Xmen llamado");
    }
    getFullnameDesdeXmen(){
        console.log(super.)
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan");
  console.log(wolverine);
})();
