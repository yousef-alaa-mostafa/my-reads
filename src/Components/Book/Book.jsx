import React, { useState } from "react";

//used styles
import BookStyle from "./Book.module.css";

//API funs
import { update } from "../../BooksAPI";

function Book(props) {
  let backgroundImage = 'url("' + props.backgroundImage + '")';

  if (props.shelf != undefined) {
    const ChangeShelf = async (event) => {
      await update(props.book, event.target.value);
      window.open("/", "_self");
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
            <select onChange={ChangeShelf}>
              <option value="none" disabled>
                Move to...
              </option>
              <option
                value="currentlyReading"
                selected={props.shelf === "currentlyReading"}
              >
                Currently Reading
              </option>
              <option
                value="wantToRead"
                selected={props.shelf === "wantToRead"}
              >
                Want to Read
              </option>
              <option value="read" selected={props.shelf === "read"}>
                Read
              </option>
              <option value="none" selected={props.shelf === "none"}>
                None
              </option>
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
