import React, { useState } from 'react'

export const App = () => {
    
     // const [valor, setValor] = useState("");
     const [value, setValue] = useState({ normal: '', texto: '' , id:'', check: true , estado:''});

     const handleChange = ({target}) => {
         //setValor(e.target.value);
         setValue((state) => ({
              ...state, 
              [target.name]: target.type ==='checkbox'? target.checked : target.value
            }));
        console.log(value);
     }
    return (
        <div>
            <input type="text" name="normal" value={value.normal}
            onChange={handleChange}/>
            <textarea name='texto' onChange={handleChange} value={value.texto} />
            <select name="id" value={value.id} onChange={handleChange}>
                <option value="">Seleccionar</option>
                <option value="1">Valor 1</option>
                <option value="2">Valor 2</option>
                <option value="3">Valor 3</option>
            </select>

           <input 
           type="checkbox"
           value={value.check}
           name="check"
           onChange={handleChange}>
           </input>

           <div>
               <label>Chancho</label>
               <input type="radio" onChange={handleChange} type="radio" value="feliz"  name="estado" 
               checked={value.estado === 'feliz'}/>Feliz
               <input type="radio" onChange={handleChange} type="radio" value="triste" name="estado" 
               checked={value.estado==='triste'}/>Triste               
               <input type="radio" onChange={handleChange} type="radio" value="alegre" name="estado" 
               checked={value.estado==='alegre'}/>Alegre
               
           </div>

        </div>
    )
}

export default App;
