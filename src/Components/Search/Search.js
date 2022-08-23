import React, { useEffect, useState } from "react";

//used components
import SearchResults from "./SearchResults";

//api funs
import { search, get } from "../../BooksAPI";

//used style
import searchStyle from "./Search.module.css";

////////////////////////////////////////////////////////////////////////////////////////////////////////

//main fun
function Search() {
  //states
  const [query, setQuery] = useState("");
  const [booksWithShelf, setBooksWithShelf] = useState([]);
  const [shelves, setshelves] = useState([]);
  const [isLosded, setIsLoaded] = useState(false);

  //go to home component on clicking back button
  const goHome = () => {
    window.open("/", "_self");
  };

  //Handle query state on changing the input area
  const SearchFun = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    setIsLoaded(false);
    if (query.length >= 1) {
      setBooksWithShelf([]);
      search(query, 40).then((books) => {
        if (books != undefined && books.length >= 1) {
          setshelves([]);
          setBooksWithShelf([]);

          books.map(async (value, index) => {
            await get(value.id).then((book) => {
              if (book.imageLinks != undefined && book.authors != undefined) {
                setshelves((current) => [...current, book.shelf]);
                setBooksWithShelf((current) => [...current, books[index]]);
              }
            });
          });
        }
      });
    }

    setTimeout(function () {
      setIsLoaded(true);
    }, 2250);
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
      {isLosded === false ? (
        <div></div>
      ) : (
        <div>
          {booksWithShelf != undefined &&
          booksWithShelf.length > 0 &&
          shelves.length === booksWithShelf.length ? (
            <div>
              <SearchResults
                books={booksWithShelf}
                queryLength={query.length}
                shelves={shelves}
              />
            </div>
          ) : (
            <div className={searchStyle.NoResults}>
              {query.length === 0 ? (
                <div></div>
              ) : (
                <div className={searchStyle.NoResults2}>
                  <div className={searchStyle.NoResultsTxt}>
                    <h1> Ooops...</h1>
                    <h2>{`No results found for: ${query} `}</h2>
                  </div>
                  <div className={searchStyle.NoResultsimg}>
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/random-ui-1/100/not-found-512.png"
                      width={"130px"}
                      height={"130px"}
                    ></img>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default Search;
