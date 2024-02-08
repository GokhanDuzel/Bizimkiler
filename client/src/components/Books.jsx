import { useEffect, useState } from "react";
import axios from "axios";

import Book from "./Book";
import "./Books.css";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/books");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const onClickHandler = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/books/${id}`);
        const bookURL = response.data.url;
        window.open(bookURL, '_blank');
    } catch (error) {
        console.error('Error downloading book:', error);
    }
  }

  return (
    <section id="books" className="section-container">
      {books.map((book) => (<Book key={book._id} id={book._id} onClickHandler={onClickHandler}/>))}
    </section>
  );
};

export default Books;
