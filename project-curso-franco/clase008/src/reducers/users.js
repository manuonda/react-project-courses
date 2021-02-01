import { GET_USER, SET_USER } from "../constants/index";

const initialState = {
    user: '',
    password:''
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: return {
       user: action.payload.user,
       password: action.payload.password
    }; break ;
    default:
      return GET_USER;
  }
};
