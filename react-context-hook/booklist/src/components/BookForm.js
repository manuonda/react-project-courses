import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

const BookForm = () => {
//   const { addBook } = useContext(BookContext);
  const{dispatch} = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // addBook(title, author);
    dispatch({ type: 'ADD_BOOK', book: {
        title, author
    }})

    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Book title"
          />
        </div>
        <div className="form-group">
          <label></label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
          />
        </div>
        <input type="submit" value="Add Book" />
      </form>
    </div>
  );
};

export default BookForm;
