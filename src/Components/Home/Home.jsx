import React, { useEffect, useState } from "react";

//used components
import Navbar from "../Navbar/Navbar";
import CurrentReading from "../BookStatus/CurrentReading";
import WantToRead from "../BookStatus/WantToRead";
import Read from "../BookStatus/Read";

//import Link
import { Link, NavLink } from "react-router-dom";

//import API funs
import { getAll, update } from "../../BooksAPI";

function Home() {
  const [books, setBooks] = useState();
  const [cBooks, setCBooks] = useState();
  const [wBooks, setWBooks] = useState();
  const [rBooks, setRBooks] = useState();
  const [currentBookShelf, setCurrentBookShelf] = useState("none");

  useEffect(() => {
    getAll().then((books) => {
      setBooks(books);
      setCBooks(books.filter((value) => value.shelf === "currentlyReading"));
      setWBooks(books.filter((value) => value.shelf === "wantToRead"));
      setRBooks(books.filter((value) => value.shelf === "read"));
    });
  });

  const toUpdateBook = (shelf) => {
    setCurrentBookShelf(shelf);
  };

  if (books != undefined) {
    return (
      <>
        <Navbar />
        <CurrentReading books={cBooks} toUpdateBook={toUpdateBook} />
        <WantToRead books={wBooks} toUpdateBook={toUpdateBook} />
        <Read books={rBooks} toUpdateBook={toUpdateBook} />
        <div className="open-search">
          <Link to="/Search">Add a book</Link>
        </div>
      </>
    );
  }
}

export default Home;
