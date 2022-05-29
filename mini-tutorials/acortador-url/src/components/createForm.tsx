import React, { useState } from "react";

const CreateForm  = ()=>{
   const [url, setUrl] = useState<string>("");
   const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
       const value = e.target.value;
       setUrl(value);
   }

   const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();

   }

   return(<>
     <form onSubmit={handleSubmit}>
         <input value={url} onChange={handleChange}></input>
         <button type="submit">Create Url</button>
     </form>
   </>)
}
export default CreateForm;