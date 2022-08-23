import React, { useEffect, useState } from "react";

// used styles
import BookStatusStyle from "./BookStatus.module.css";

//used components
import Book from "../Book/Book";

//API funs
import { getAll, update } from "../../BooksAPI";

//main fun
function CurrentReading(props) {
  const [currentBookShelf, setCurrentBookShelf] = useState("none");

  useEffect(() => {
    props.toUpdateBook(currentBookShelf);
  }, [currentBookShelf]);

  const toUpdateBook = (shelf) => {
    setCurrentBookShelf(shelf);
  };

  return (
    <div>
      <div className={BookStatusStyle.bookshelf}>
        <h2 className={BookStatusStyle.bookshelfTitle}>Currently Reading</h2>
        <div className={BookStatusStyle.bookshelfBooks}>
          <ol className={BookStatusStyle.booksGrid}>
            {props.books.map((value, index) => {
              return (
                <div key={index}>
                  <li>
                    <Book
                      backgroundImage={value.imageLinks.smallThumbnail}
                      bookTitle={value.title}
                      bookAuthors={value.authors}
                      shelf={value.shelf}
                      book={value}
                      toUpdateBook={toUpdateBook}
                    />
                  </li>
                </div>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
export default CurrentReading;
