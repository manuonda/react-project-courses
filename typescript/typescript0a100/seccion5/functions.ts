interface General {
    (nombre: string, apellido: string, edad:number): void
}

let functionGeneral : General;
functionGeneral = (nombre: string, apellido: string, edad: number ) =>  {
  console.log(`nombre : ${nombre}, apellido :${apellido}, edad: ${edad}`);
}

functionGeneral("david","garcia",23);