import React, { Component } from "react";
import "./Header.less";

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={"app-header"} component={"header-component"}>
        <ul>
          {React.Children.map(this.props.children, (item, index) => item)}
        </ul>
      </div>
    );
  }
}
export default Header;
