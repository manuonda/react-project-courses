import React , {useState , useReducer } from 'react'
import useNewSubForm from '../hooks/useNewSubForm';
import { Sub } from '../types';



interface FormProps {
     onNewSub :(newSub: Sub) => void
};

const INITIAL_STATE = {
    nick: '',
    avatar: '',
    subMonths: 0,
    description: ''
}




const Form = ({ onNewSub } : FormProps) => {
    // const[inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE);


    // reducer contiene siempre un state and action
    const [inputValues, dispatch ] = useNewSubForm();

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        onNewSub(inputValues);  
        handleClear();                    
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      
        const { name , value } = e.target;
        dispatch({
            type: 'change_value',
            payload:{
                inputName : name,
                inputValue: value
            }
        });

    //     setInputValues({
    //       ...inputValues,
    //       [e.target.name] : e.target.value
    //   })
    }

    const handleClear = () => {
        dispatch({
            type: 'clear'
        })
        //   setInputValues({
       //     nick: '',
       //     avatar: '',
       //     subMonths: 0,
       //     description: ''
       //   })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={inputValues.nick} name="nick" placeholder="nick" />
                <input type="text" onChange={handleChange} value={inputValues.subMonths} name="subMonths" placeholder="subMonths" />
                <input type="text" onChange={handleChange} value={inputValues.avatar} name="avatar" placeholder="avatar" />
                <textarea  onChange={handleChange} value={inputValues.description} name="description" placeholder="description" />
                <button type="submit">Save new submit</button>
                <button type="button" onClick={handleClear}>Clear</button>
            </form>
        </div>
    )
}

export default Form;
