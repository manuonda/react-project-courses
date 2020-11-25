import React, {useContext, useState} from 'react';
import { GlobalStateContext }  from '../context/ContextProvider';

const Task = ({ id, title}) => {

    const{deleteTask, findTask} = useContext(GlobalStateContext)
    
    
    return (
        <div>
           <li className="list-item">
            <span>{title}</span> 
            <div>
                <button type="button" className="btn-delete task-btn"
                 onClick={() => deleteTask(id)} 
                >
                    <i className="fas fa-trash-alt"></i> 
                </button>
                <button tybe="button" className="btn-edit task-btn"
                  onClick={() => findTask(id)}
                >
                    <i className="fas fa-pen"></i> 
                </button>
            </div>
           </li>
        </div>
    );
};

export default Task;