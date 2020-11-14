import React, {useContext} from 'react';
import {BookContext} from  '../context/BookContext';



const NavBar = () => {
     const {books} = useContext(BookContext)
     console.log(books);
    return ( 

        <div className="navbar">
            <h1>Ninja Reading List</h1>
            <p>Currently you have  {books.length}  books to get through</p>
        </div>
     );
}
 
export default NavBar;