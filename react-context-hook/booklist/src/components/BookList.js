import React, { useContext} from 'react'
import {BookContext} from '../context/BookContext'
import BookDetails from '../components/BookDetails'


const BookList = () => {
    const { books  } = useContext(BookContext);
    console.log(books);
    return books.length?  ( 
        <div className="book-list">
            <ul>
                {books.map((book) => {
                    return (<BookDetails book={book} key={book.id}></BookDetails>)
                })}
            </ul>

        </div>
     ) : (
       <div className="emtpy">No books to read </div>
     )
}
 
export default BookList;