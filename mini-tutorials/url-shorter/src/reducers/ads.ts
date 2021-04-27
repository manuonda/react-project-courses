import { CardActionArea } from '@material-ui/core';
import {types} from '../types/index'

const initialState = {
    visiable: false, 
    info: null
};


export const adsReducer = ( state = initialState, action) => {

    switch(action.type) {
        case types.SET_ADD: 
        return {
            visible: action.payload.visible,
            info: action.payload.info || null
        }
    }

}