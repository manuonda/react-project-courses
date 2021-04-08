import { Response, Request } from 'express';
import { readdirSync } from 'fs';
import Todo from '../models/todo';
import { ITodo } from '../types/todo';

export const all = async (req: Request, res: Response) : Promise<void> => {

    try{
        const todos: ITodo[] =  await Todo.find({});
        res.status(200).json({ todos});
    }catch(error) {
        res.status(500);
    }
    
}

export const addTodo = async( req: Request, res: Response): Promise<void> => {
    console.log("req.body" , req.body);
    try{
       const { name , description, status  } = req.body;
       const todo : ITodo = new Todo({
           name: name,
           description: description,
           status : status,
       });

       const result = await todo.save();
       res.status(200).json(result);

    }catch(error) {
        console.error(error);
        res.status(500);
    }
}

// Update 
export const update = async(req:Request, res: Response) : Promise<void> => {
    try {
        const { 
              params : { id } ,
              body 
            } = req;

            const  updateTodo : ITodo | null =  await Todo.findByIdAndUpdate({ _id: id},body);
            const  allTodos = await Todo.find();
            res.status(200).json({
                "message": "Update ",
                todo: updateTodo,
                todos: allTodos
            }); 
        
    } catch (error) {
         throw error;
         res.status(error);
    }
}


// Remove 
export const remove = async (req: Request, res: Response) : Promise<void> => {

    try {
         const id = req.params.id;
         const deleteTodo: ITodo | null = await Todo.findByIdAndRemove(id);
         const allTodos = await Todo.find();
         res.status(200).json({
             message: "Delete todo",
             todo: deleteTodo,
             todos: allTodos
         })
    } catch (error) {
        throw error;
    }
}


