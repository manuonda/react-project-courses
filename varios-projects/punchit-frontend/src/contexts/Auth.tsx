import  React , { createContext, useEffect , useState}  from "react";
import PropTypes from "prop-types";

import { iLogin} from "../types/login";
import { defaultState, iAuth } from "../types/auth";


type ContextType = {
    auth: iAuth,
    login : (user: iLogin) => void,
    logout: () => void
};


const contextDefault : ContextType = {
    auth: defaultState,
    login:() => { // },
    logout: () => { // }
}

const AuthContext = createContext<ContextType>(contextDefault);
