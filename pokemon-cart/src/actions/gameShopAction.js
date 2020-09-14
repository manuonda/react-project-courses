import { BUY_POKEMON, RETURN_POKEMON } from "../constants"

export const buy_pokemon_action = (cant) => {
   return {
       type:BUY_POKEMON,
       payload: cant 
   }
}

export const return_pokemon_action = (cant) => {
    return {
        type: RETURN_POKEMON,
        payload: cant
    }
}