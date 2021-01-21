import React from 'react'
import PropTypes from 'prop-types'

const Home = props => {
    const handleButtonClick = (hola) => {
        
    }
    return (
        <div>
            Home
            <button onClick={() => handleButtonClick("hola")}>Click</button>
            
        </div>
    )
}


export default Home
