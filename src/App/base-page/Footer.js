import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/message">信息</Link>
          </li>
          <li>
            <Link to="/find">发现</Link>
          </li>
          <li>
            <Link to="/address">通讯录</Link>
          </li>
          <li>
            <Link to="/me">我</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default Footer;
