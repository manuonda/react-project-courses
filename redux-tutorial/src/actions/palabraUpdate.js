import { UPDATE_WORD } from "../constants"

export const palabraUpdate = palabra => {
    return {
        type: UPDATE_WORD,
        payload: palabra
    }
} 
