import React, { ChangeEvent, FormEvent , useState } from "react";
import { Button , Grid , FormControl, FormLabel, Stack, Input , Container } from '@chakra-ui/react';




const FormCreate:React.FC = () => {

    const[url, setUrl] = useState<string>("");
   
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
    }
  
    const handleChange =(e: ChangeEvent<HTMLInputElement>)  => {
      setUrl(e.target.value);
    }

    return (
       <div>

          <Stack>
           <Grid rowSpan={1} column={1}>
           <form onSubmit={handleSubmit}>
             <FormControl>
                 <FormLabel>Ingrese Url</FormLabel>
                 <Input name="url" type="text"
                  autoFocus
                  onChange={handleChange}/>
             </FormControl>

               <Button type="submit">Enviar</Button>
           </form>    
           </Grid>    
           </Stack>
           
       </div>
   )
}

export default FormCreate;