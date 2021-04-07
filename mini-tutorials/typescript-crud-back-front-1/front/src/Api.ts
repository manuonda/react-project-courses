import React from "react";
import axios , {AxiosResponse} from "axios";
import {ApiDataType, ITodo} from "./type";

const baseUrl: string ="http://localhost:4000";

export const getTodos = async (): Promise<ITodo[]> => {
   
    try {
        const todos : ITodo[] = await axios.get(baseUrl + "/todo/list");
        console.log('todos : ', todos);
        return todos;
    } catch (error) {
        throw new Error(error);
    }
}

export const addTodo = async( formData: ITodo): Promise<ITodo[]> => {
   
    try {
        const todo:Omit<ITodo, "_id"> = {
           name: formData.name,
           description: formData.description,
           status: false
        };
        const saveTodo : any  = await axios.post(baseUrl + "/add-todo", todo);
        return saveTodo;
    } catch (error) {
        throw new Error(error);
    }
}