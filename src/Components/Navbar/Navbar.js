import React from "react";
import { ReactDOM } from "react";

import NavbarStyle from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={NavbarStyle.container}>
      <h1>MyReads</h1>
    </div>
  );
}

export default Navbar;
