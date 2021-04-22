import { CategorySharp } from "@material-ui/icons";
import React , {SetStateAction,ChangeEvent  ,FormEvent , Dispatch, useState} from "react"


/**
 * Add Category 
 */

 type inputChange = ChangeEvent<HTMLInputElement>;
  
 type Props = {
    handleCategorys: Dispatch<SetStateAction<string[]>> ;
 }

 const AddCategory:React.FC<Props> = ({handleCategorys}) => {
    const [value, setValue] = useState<string>("");
    const handleInputChange = (e : inputChange)  => {
       setValue(e.target.value);
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleCategorys((categorys:string[]) => [...categorys, value]);
        console.log(value);
        setValue("");
        console.log(value);

    }
    return(
        <form onSubmit={handleSubmit}>
             <input type="text" onChange={(e) => handleInputChange(e)}/> 
           <button type="submit">Agregar</button>  
        </form>
      )
}

export default AddCategory;