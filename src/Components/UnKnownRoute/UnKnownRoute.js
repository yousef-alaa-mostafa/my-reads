import React, { Component } from "react";
import UKRStyle from "./UnKnownRoute.module.css";

export default class UnKnownRoute extends Component {
  render() {
    return (
      <div className={UKRStyle.container}>
        <h1>404</h1>
        <h5> Not Found</h5>
        <p>The resource required couldn't be Found in this server</p>
      </div>
    );
  }
}
