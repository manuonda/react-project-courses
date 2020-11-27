import React from 'react';

const FunctionButton = (props) => {

    const handleClick = props => {
        console.log('handleClick button ')
    }
    return (
        <div>
        <button onClick={handleClick}>Function button {props.text}</button>

        </div>
    );
};

export default FunctionButton;