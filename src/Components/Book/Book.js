import React, { useState } from "react";

//used styles
import BookStyle from "./Book.module.css";

//API funs
import { update } from "../../BooksAPI";

function Book(props) {
  let backgroundImage = 'url("' + props.backgroundImage + '")';

  const [bookShelf, setBookShelf] = useState(props.shelf);

  if (props.shelf != undefined) {
    const ChangeShelf = async (event) => {
      setBookShelf(event.target.value);
      await update(props.book, event.target.value);
      props.toUpdateBook(event.target.value);
    };

    return (
      <div className={BookStyle.book}>
        <div className={BookStyle.bookTop}>
          <div
            className={BookStyle.bookCover}
            style={{
              width: 128,
              height: 193,
              backgroundImage: backgroundImage,
            }}
          ></div>
          <div className={BookStyle.bookShelfChanger}>
            <select defaultValue={bookShelf} onChange={ChangeShelf}>
              <option value="null" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className={BookStyle.bookTitle}>{props.bookTitle}</div>
        <div className={BookStyle.bookAuthors}>{props.bookAuthors}</div>
      </div>
    );
  }
}
export default Book;
