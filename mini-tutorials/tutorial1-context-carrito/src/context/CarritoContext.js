import { createContext } from "react";

export const CarritoContext = createContext("CarritoContext");

const {Provider } = CarritoContext;

export const CarritoProvider = ({children}) => {
    const values = {
        products:[]
    }
}

