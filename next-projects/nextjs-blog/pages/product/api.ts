import { Product } from "./types";
import Papa from "papaparse"
import axios from "axios";

export default {
    list: async (): Promise<Product[]> => {
        return axios.get(`https://docs.google.com/spreadsheets/d/e/2PACX-1vS7ReWfG9X-1cIeonImC8n5_N9bBYUNEDYw3ZReWuaMrEaoRtKihhg8anlU7bBG8HcJdjUTX6eo2Sld/pub?output=csv`,{
            responseType: 'blob'
        }).then( response => {
           return new Promise<Product[]>((resolve, reject) => {
               Papa.parse(response.data, {
                   header:true,
                   complete: results => {
                       const products = results.data as Product[];
                      return resolve(products.map(product => ({
                         ...product,
                         price :Number(product.price)  
                      })))
                   },
                   error: (error) =>  reject(error.message),
               });
           })
        })
    }
}