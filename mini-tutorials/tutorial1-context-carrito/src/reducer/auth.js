import { LOGOUT, SET_AUTH } from "../actions/auths"

export const initialState = {
    isLoggedIn : false, 
    jwt: ''
}


export const AuthReducer = (state = initialState, action ) =>{
    switch(action.type){
        case SET_AUTH:{
            const { jwt } = action.payload;
            return{
                isLoggedIn: true,
                jwt
            } 
        };
        case LOGOUT:{
           return initialState
        };
        default : return state;
    }
}