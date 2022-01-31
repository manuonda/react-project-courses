import React, { useState } from 'react'

export const App = () => {
    
     const [valor, setValor] = useState("");
     const [value, setValue] = useState({ normal: '', texto: ''});

     const handleChange = (e) => {
         setValor(e.target.value);
     }
    return (
        <div>
            <input type="text" name="normal" value={valor} 
            onChange={handleChange}/>
            valor {valor}
            <textarea name='text' onChange={handleChange} 
        </div>
    )
}

export default App;
