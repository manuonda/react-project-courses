import { BUY_POKEMON, RETURN_POKEMON } from "../constants";

const default_game_shop = {
  pokemon: 30,
};

const game_shop = (state = default_game_shop, action) => {
  console.log('action.type => ', action.type);
  console.log('action.payload  => ', action.payload );
  switch (action.type) {
    case BUY_POKEMON:
      return {
          ...state,
          pokemon: state.pokemon - action.payload
      }
    case RETURN_POKEMON:
      return {
         ...state,
         pokemon: state.pokemon + action.payload     
      }
     default:  return state;
  }
};

export default game_shop;
