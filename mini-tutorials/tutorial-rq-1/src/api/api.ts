import axios, { Axios, AxiosResponse } from "axios";
import { IUser } from "../type";

const API_URL = "http://localhost:3005"

export const getAll = async () => {
   const  {data, status} = await axios.get<IUser[]>(`${API_URL}/users`);
   console.log(data);
   return data;
}

export const postUser = async (user:IUser) => {
    const {data, status} = await axios.post(`${API_URL}/users`, user);
    return data;
}


export const updateUser = async (user:IUser) => {
   const {data, status} = await axios.post(`${API_URL}/users/${user.id}`, user);
   return data;
}

export const getById = async (id:any) => {
   const {data, status} = await axios.get(`${API_URL}/users/${id}`);
   return data;   
}

export const deleteById = async (id : any | string ) =>  {
   const { data, status } = await axios.delete(`${API_URL}/users/${id}`);
   return data;
}

