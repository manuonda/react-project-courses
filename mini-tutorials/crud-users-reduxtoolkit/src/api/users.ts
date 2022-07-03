import axios from "axios";


const URL = "http://localhost:3005/";

export const getAll = () => {
    
    try {
        const data = axios.get(URL);
        return data;
    } catch (error) {
        
    }
}