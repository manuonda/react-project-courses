import React ,  { createContext , useState, useReducer, useEffect} from 'react'
import uuid from 'uuid/dist/v1'
import { bookReducer } from '../reducers/BookReducer';

export const BookContext= createContext()


const BookContextProvider = (props) => {
    
    // const[books, setBooks] = useState([
    //     { id: 1, title:'the lord of the rings'  , author: 'tolkins'},
    //     { id: 2, title:'batman' , author:'dgarcia'},
    //     { id: 3, title:'godzilla', author:'warners'}
    // ])
    
    // const addBook =(title, author) => {
    //     setBooks([...books, { id:uuid(), title, author}]);
    // }

    // const removeBook =(id)=> {
    //   setBooks(books.filter( book => book.id !== id))
    // }

    // return (
    //     <div>
    //       <BookContext.Provider value={{books,addBook, removeBook}}>
    //        {props.children}      
    //       </BookContext.Provider>        
    //     </div>
    // );
    const[books, dispatch] = useReducer(bookReducer,[], () => {
        const localData = localStorage.getItem('books');
        return localData? JSON.parse(localData): [] 
    })
    useEffect(() => {  
       localStorage.setItem('books', JSON.stringify(books)); 
    },[books])
    return (
        <div>
          <BookContext.Provider value={{books,dispatch}}>
           {props.children}      
          </BookContext.Provider>        
        </div>
    );
};

export default BookContextProvider;