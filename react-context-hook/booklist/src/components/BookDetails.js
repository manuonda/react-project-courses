import React , { useContext }from 'react';
import { BookContext } from '../context/BookContext';


const BookDetails = ({ book }) => {
    
    const{dispatch} = useContext(BookContext);
    // const { removeBook} = useContext(BookContext)
   
    return (
        <div>
            <li onClick={() => dispatch({ type: 'REMOVE_BOOK',id : book.id})}>
            <div className="tilte">{book.title}</div>
            <div className="author">{book.author}</div>   
            </li> 
        </div>
    );
};

export default BookDetails;