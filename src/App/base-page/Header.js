import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={"app-header"} component={"header-component"}>
        <ul>
          <li>
            {"<"}微信{"(1)"}
          </li>
          <li>前端小宝宝们</li>
          <li>···</li>
        </ul>
      </div>
    );
  }
}
export default Header;
