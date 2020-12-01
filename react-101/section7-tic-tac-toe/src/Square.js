import React from 'react';

const Square = ({value , onClick}) => {
    return (
        <div>
            <button className='Square' onClick={onClick}>{value}</button>
        </div>
    );
};

export default Square;