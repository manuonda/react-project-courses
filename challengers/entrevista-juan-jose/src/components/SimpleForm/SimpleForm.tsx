import React,{useState} from 'react';
import { Person } from '../../type';


export interface SimpleFormInterface {}



const SimpleForm : React.FC<SimpleFormInterface> = () => {
	
	const [firstName, setFirstName] = useState("");
	const [user, setUser] = useState<Person>({
		age: 0,
		lastName: ''
	});




	const handleChangeFirstName =(e:React.ChangeEvent<HTMLInputElement>) => {
      setFirstName(e.target.value);
	}

	const handleChangeForm =(e:React.ChangeEvent<HTMLInputElement>) => {
		setUser({
			...user,
            [e.target.name]:e.target.value
		})
	}
	

	const handleSubmitForm = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
	}

	
	return (
       <form onSubmit={(e) => handleSubmitForm}>
          <label>
		  <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
	       </label>
		   <label> LastName
		   <input type="text" name={user?.lastName} onChange={handleChangeForm}></input>
	       </label>
		   <label>Age
		   <input type="text" name="age" value={user?.age} onChange={handleChangeForm}></input>
		   </label>
		   <button type="submit">Enviar Datos</button>
	   </form>
	)
};

export default SimpleForm;
