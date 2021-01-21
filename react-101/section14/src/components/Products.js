import React from 'react'
import { useHistory } from 'react-router-dom'

const Products = () => {

    let history = useHistory();

    const handleButtonClick = (address) => () => {
        //console.log(props)
        console.log(address)
        //props.history.push(address);
        history.push(address)
    }
    return (
        <div>
            
            <button onClick={handleButtonClick('/')}>Go 23Home</button>
            <button onClick={handleButtonClick('/about')}>Visit About Page</button>
        </div>
    )
}

export default Products
