import React from 'react';

const FunctionButton = ({ times, onButtonClick}) => {

    // const handleClick = props => {
    //     console.log('handleClick button ')
    // }

    return (
        <div>
        <button onClick={onButtonClick}>Function times {times}</button>

        </div>
    );
};

export default FunctionButton;