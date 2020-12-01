import React  from 'react';

const Button =({children, onSomethingHappend}) => (
    <div>
       <button onClick={onSomethingHappend}>{children}</button> 
    </div>
)
export default Button;