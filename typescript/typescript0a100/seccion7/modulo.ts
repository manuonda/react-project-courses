export const URL:string ="HTTP://localhost";
export const BASE:string="http://localhost";


export class Persona {
    nombre: string;
}

export interface Humano {
    nombre:string;
}

export const mostrar = (nombre: string):void => {
    console.log("mostrar" + nombre);
}

