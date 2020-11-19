import React, {useContext} from 'react';
import {Link, useHistor}  from 'react-router-dom'
import {GlobalContext} from '../context/GlobalContext'

const EditArticle = (props) => {

    const id = props.match.params.id;
    const{ articles }= useContext(GlobalContext)
    
    console.log(id);
    return (
        <div>
            
        </div>
    );
};

export default EditArticle;