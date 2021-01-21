import React from 'react'
import { useParams} from 'react-router-dom'

const Library = (props) => {
     
    let {library} = useParams();
    console.log(`library ${library}`);
    return (
        <div>
            Library
        </div>
    )
}

export default Library;