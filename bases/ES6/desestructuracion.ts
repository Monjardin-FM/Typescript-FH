(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };
  const avengers: Avengers = {
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

  const printAvenger = ({ ironman, ...resto }: Avengers) => {
    console.log(ironman, resto);
  };
  //   printAvenger(avengers);

  const avengersArr: string[] = ["Cap. América", "IronMan", "Hulk"];
  //   const ironman = avengersArr[1];
  //   console.log({ ironman });

  const [capi, ironman] = avengersArr; //Al desestructurar un arreglo podemos ponerle el nombre que queramos a lo que estemos desestructurando
  console.log(ironman, capi);
})();
