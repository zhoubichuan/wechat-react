import React, { Component } from "react";
/* 非受控组件 */
class RedBagMessage extends Component {
  // constructor() {
  //   super();
  // }
  handleChange = () => {
    let redBagMessage = this.refs.redBagMessage.value || "恭喜发财，大吉大利";
    this.props.sendRedBagMessage({ redBagMessage });
  };
  render () {
    return (
      <li className={"tips"}>
        <input
          type="text"
          maxLength="3"
          placeholder={"恭喜发财，大吉大利"}
          ref="redBagMessage"
          onChange={this.handleChange}
        />
      </li>
    );
  }
}

export default RedBagMessage;
