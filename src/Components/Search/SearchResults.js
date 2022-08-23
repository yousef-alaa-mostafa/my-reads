import React, { useEffect, useState } from "react";

//used components
import Book from "../Book/Book";

//api funs
import { search, get } from "../../BooksAPI";

//used style
import BookStatusStyle from "../BookStatus/BookStatus.module.css";

/////////////////////////////////////////////////////////////

//main fun
function SearchResults(props) {
  const [currentBookShelf, setCurrentBookShelf] = useState("none");

  if (props.books != undefined && props.books.length > 0) {
    const toUpdateBook = (shelf) => {
      setCurrentBookShelf(shelf);
    };

    return (
      <div>
        {/* {console.log(props.shelves)} */}
        {props.books.length > 0 && props.queryLength > 0 ? (
          <div>
            <div className={BookStatusStyle.bookshelf}>
              <h2 className={BookStatusStyle.bookshelfTitle}>Search Results</h2>
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
                            shelf={props.shelves[index]}
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
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
export default SearchResults;
