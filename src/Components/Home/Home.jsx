import React from "react";

//used components
import Navbar from "../Navbar/Navbar";
import CurrentReading from "../BookStatus/CurrentReading";
import WantToRead from "../BookStatus/WantToRead";
import Read from "../BookStatus/Read";

//import Link
import { Link, NavLink } from "react-router-dom";

function NavToSearch() {
  window.open("/Search", "_self");
}

function Home() {
  return (
    <>
      <Navbar />
      <CurrentReading />
      <WantToRead />
      <Read />
      <div className="open-search">
        <Link to="/Search">Add a book</Link>
      </div>
    </>
  );
}

export default Home;
