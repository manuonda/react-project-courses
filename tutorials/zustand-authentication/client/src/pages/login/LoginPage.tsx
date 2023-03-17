import React from 'react'
import { loginRequest } from '../../api/login';

interface Props {

}

const LoginPage : React.FC<Props> = ():JSX.Element  => {
   
   const handleSubmit =async (e:React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
       const password = (e.currentTarget.elements[0] as HTMLInputElement).value;
       console.log(email, password);

       const response = await loginRequest(email, password);
       console.log(response);
   } 
   return (
    <form onSubmit={handleSubmit}>
       <label>Email</label>
       <input type="email" id="username" name="email"/>
       <label>Passsword</label>
       <input type="password" placeholder="informacion" name="password" />
       <button type="submit">Enviar</button>
    </form>
  )
}

export default LoginPage;
