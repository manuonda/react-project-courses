import React, { Component , useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

// export default class ThemeToggle extends Component {
    
//     static contextType = ThemeContext;

//     render() {
//         const { toggleTheme} = this.context;
//         return (
           
//         )
//     }
// }


const ThemeToggle = () => {
    const {toggleTheme } = useContext(ThemeContext)
    return (
        <div>
            <button onClick={toggleTheme}>Toggle the themes</button>
         </div>
    );
};

export default ThemeToggle;
