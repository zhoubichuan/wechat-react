import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return (
      <li>
        <span>{"姓名" + this.props.name}</span>
        <span>{"抢得红包" + this.props.val + "元"}</span>
        <span>{this.props.rest || 0}</span>
      </li>
    );
  }
}
export default ListItem;
