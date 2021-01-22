import React from 'react'
import { Redirect, useParams} from 'react-router-dom'

const Library = (props) => {
     
    let {library} = useParams();
    console.log(`library ${library}`);
            if(library === 'netflix') {
                return(
                    <div>
                        <p>{library}</p>
                    </div>
                )
            } else{
                return <Redirect to='/about'></Redirect>
            }
    
}

export default Library;