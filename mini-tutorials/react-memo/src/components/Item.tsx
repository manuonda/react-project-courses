import React,{useEffect} from "react";
import { User } from "../type";


type Props = {
    user: User;
    handleDelete: (id:number) => void;
}
const Item: React.FC<Props> =React.memo(({ user , handleDelete}) => {

    useEffect(() => {
        // console.log(`Item Render ${user.firstName}`);
    });

    return (
        <div>
            <h1>{user.firstName}</h1>
            <button onClick = {() => handleDelete(user.id)}>
                Delete
            </button>
        </div>
    )
})

export default Item
