import React,{useContext, useState} from 'react';
import {GlobalStateContext} from '../context/ContextProvider'
import Task from './Task'


const TaskList = () => {
    
    const{tasks ,item} = useContext(GlobalStateContext)
    console.log('TASKLIST');
    console.log('TASKS => ', tasks);
    console.log('ITEM  => ', item);

    return (
        <div>
           { tasks.length > 0 ?
            (
            <ul className="list">
                {tasks && tasks.map((task) => {
                    return (
                        <Task key={task.id} {...task}></Task>
                     )}
                )}
              </ul>
            )
            :
            (
                <>
                 Not exists Tasks
                </>
            )
           } 
         

        </div>
    );
};

export default TaskList;