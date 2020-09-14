import { combineReducers } from "redux";
import game_shop from './gameShopReducer'

const root =  combineReducers({
    game_shop
})

export default root;