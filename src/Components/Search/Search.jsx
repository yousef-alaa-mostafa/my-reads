import React, { useEffect, useState } from "react";

//used components
import SearchResults from "./SearchResults";

//api funs
import { search } from "../../BooksAPI";

//used style
import searchStyle from "./Search.module.css";

function Search() {
  const [query, setQuery] = useState("");

  const [books, setBooks] = useState([]);

  const goHome = () => {
    window.open("/", "_self");
  };

  const SearchFun = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    console.log(query);
    search(query, 40).then((books) => {
      setBooks(books);
    });
    console.log(books);
  }, [query]);

  return (
    <div className={searchStyle.searchBooks}>
      <div className={searchStyle.searchBooksBar}>
        <a className={searchStyle.closeSearch} onClick={goHome}>
          Close
        </a>
        <div className={searchStyle.searchBooksInputWrapper}>
          <input
            type="text"
            onChange={SearchFun}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className={searchStyle.searchBooksResults}>
        <ol className={searchStyle.booksGrid}></ol>
      </div>
      <SearchResults books={books} />
    </div>
  );
}
export default Search;
