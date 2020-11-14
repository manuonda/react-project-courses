import React, { Component , useContext } from 'react';
import { ThemeContext } from "../context/ThemeContext";

// class BookList extends Component {
//     static contextType= ThemeContext;
//     render() {
//         const { isLigthTheme , light, dark } = this.context
//         const theme  = isLigthTheme ? light  : dark ;
     

//         return (
//             <div className="book-list" style = {{ color : theme.syntax , background:  theme.bg}}>
//                 <ul>
//                     <li style={{ background : theme.ui }}>the way of kings </li>
//                     <li style={{ background : theme.ui }}>the name of the wind</li>
//                     <li style={{ background : theme.ui }}>the final empire</li>
//                 </ul>
 
                
//             </div>
//         );
//     }
// }

const BookList = () => {

    const { isLigthTheme, light, dark } = useContext(ThemeContext);
    const theme  = isLigthTheme ? light  : dark ;
     
    return ( 
        <div className="book-list" style = {{ color : theme.syntax , background:  theme.bg}}>
        <ul>
            <li style={{ background : theme.ui }}>the way of kings </li>
            <li style={{ background : theme.ui }}>the name of the wind</li>
            <li style={{ background : theme.ui }}>the final empire</li>
        </ul>

        
    </div>
     );
}

export default BookList;