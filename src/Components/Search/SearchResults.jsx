import React, { useEffect, useState } from "react";

//used components
import Book from "../Book/Book";

//api funs
import { search } from "../../BooksAPI";

//used style
import searchStyle from "./Search.module.css";
import BookStatusStyle from "../BookStatus/BookStatus.module.css";

function SearchResults(props) {
  if (props.books != undefined && props.books.length > 0) {
    console.log(props.books);
    return (
      <div>
        {props.books.length > 0 ? (
          <div>
            <div className={BookStatusStyle.bookshelf}>
              <h2 className={BookStatusStyle.bookshelfTitle}>
                Currently Reading
              </h2>
              <div className={BookStatusStyle.bookshelfBooks}>
                <ol className={BookStatusStyle.booksGrid}>
                  {props.books.map((value, index) => {
                    {
                      console.log(value);
                    }
                    return (
                      <div key={index}>
                        <li>
                          <Book
                            backgroundImage={value.imageLinks.smallThumbnail}
                            bookTitle={value.title}
                            bookAuthors="Harper Lee"
                            shelf={"none"}
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
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
export default SearchResults;
