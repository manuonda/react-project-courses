import React , {useContext, useState, useEffect}from 'react';
import { v4 as uuidv4 } from 'uuid';
import {GlobalStateContext} from '../context/ContextProvider'

const TaskForm = () => {

    const{addTask, editTask , item} = useContext(GlobalStateContext);
    const[title, setTitle] =  useState('');
    useEffect(() => {
        console.log('se ejecuta el useEffect : ', item);
        if (item !== null && item !== undefined ){
          setTitle(item.title)
        } else {
            setTitle('');
        }
    },[item]); // depende de la variable item que esta en el context de reducer


    const handleSubmit = (ev) => {
        ev.preventDefault();
        if ( item === null || item === undefined ){
            addTask({
                id : uuidv4(),
                title: title 
             });
        setTitle("");
        } else {
           editTask({title, id: item.id});
        }
    }

    const onChange  =(ev) => {
        setTitle(ev.target.value);
    }
    return (
        <div>
            <form  className="form" onSubmit={handleSubmit}>
                <label>Task</label>
                <input type="text" 
                  name={title}
                  className="task-input"
                  placeholder="Add Task"
                  onChange={onChange}
                ></input>
                <div className="buttons">
                   <button type="sumbit" className="btn add-task-btn">Add Task</button>
                   <button className="btn clearn-btn">Clear Task</button>
                  
                </div>
            </form>
            
        </div>
    );
};

export default TaskForm;