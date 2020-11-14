import React, { createContext, useContext, useState} from 'react'

export const BookContext = createContext();

const BookContextProvider    = (props) => {
    const [books, setBooks] = useState([
        { id: 1 , title : 'book 1'},
        { id: 2 ,  title: 'book2'}
    ])
    return (
        <div>
            <BookContext.Provider value={{...books}}>
                {props.children}
            </BookContext.Provider>
        </div>
    );
};

export default BookContextProvider;