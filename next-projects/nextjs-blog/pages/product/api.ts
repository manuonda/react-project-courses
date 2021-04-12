import { Product } from "./types";

import axios from "axios";

export default {
    list: async (): Promise<Product[]> => {
        return axios.get(``,{
            responseType: 'blob'
        }).then( response => {
            console.log(response.data);
            return response.data;
        })
    }
}