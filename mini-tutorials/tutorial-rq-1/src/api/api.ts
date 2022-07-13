import axios, { Axios, AxiosResponse } from "axios";
import { IUser } from "../type";

const API_URL = "http://localhost:3005"

export const getAll = async () => {
   const  {data, status} = await axios.get<IUser[]>(`${API_URL}/users`);
   console.log(data);
   return data;
}

export const postUser = async () => {
    const resp = await axios.post(`${API_URL}/users`);
    return resp;
}

export const getById = async (id:any) => {
   const resp = await axios(`${API_URL}/users/${id}`);
   return resp;   
}

