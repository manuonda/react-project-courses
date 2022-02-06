import {useEffect, useState} from "react";

const UseFormulario = (inicial) => {
    const [formulario, setFormulario] = useState(inicial);
     
    useEffect(() => {
       console.log('useEffect useFormualrio');
       
    },[])
     const handleChange = (e) => {
        e.preventDefault()
        setFormulario((prev) => ({
            ...prev,
            [e.target.name] : e.target.value   
        }))
     }

     const reset= () => setFormulario(inicial);

     return [formulario, handleChange, reset];
}

export default UseFormulario;
