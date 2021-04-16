import React, { memo , useEffect} from "react"

import Item from "./Item";
// type
import { User } from "../type";

type Props = {
  users: User[],
  handleDelete: (id: number) => void;
};

// memo : memoriza un componente 
const List:React.FC<Props> = React.memo(({ users , handleDelete }) => {

    useEffect(() => {
       // console.log("List Render");
    })
    return (
        <>
          <ul>
            { users.map((user: User) => (
               <Item key={user.id} 
                     user={user}
                     handleDelete={handleDelete}
              />
             ))}
          </ul>  
        </>
    )
})

export default List
