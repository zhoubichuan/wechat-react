import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavPart extends Component {
  render() {
    return (
      <div className={"nav"}>
        <ul>
          <li>
            <Link to="/">
              {"<"}微信{"(1)"}
            </Link>
          </li>
          <li>前端小宝宝们</li>
          <li>···</li>
        </ul>
      </div>
    );
  }
}
export default NavPart;
