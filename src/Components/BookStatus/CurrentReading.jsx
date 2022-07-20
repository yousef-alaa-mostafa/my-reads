import React, { useEffect, useState } from "react";

// used styles
import BookStatusStyle from "./BookStatus.module.css";

//used components
import Book from "../Book/Book";

//API funs
import { getAll } from "../../BooksAPI";

// ============================== main function ============================= //

function CurrentReading() {
  const [books, setBooks] = useState();

  useEffect(() => {
    getAll().then((books) => {
      setBooks(books);
    });
  }, []);

  if (books != undefined) {
    let arr = [22, 34, 100];
    let CurrentReading_books = books.filter((value, index) => {
      return value.shelf === "currentlyReading";
    });

    return (
      <div>
        <div className={BookStatusStyle.bookshelf}>
          <h2 className={BookStatusStyle.bookshelfTitle}>Currently Reading</h2>
          <div className={BookStatusStyle.bookshelfBooks}>
            <ol className={BookStatusStyle.booksGrid}>
              {CurrentReading_books.map((value, index) => {
                return (
                  <div key={index}>
                    <li>
                      <Book
                        backgroundImage={value.imageLinks.smallThumbnail}
                        bookTitle={value.title}
                        bookAuthors={value.authors}
                        shelf={value.shelf}
                        book={value}
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
}
export default CurrentReading;
