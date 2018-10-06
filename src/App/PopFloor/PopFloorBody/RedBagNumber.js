import React, { Component } from "react";
/* 受控组件 */
class RedBagNumber extends Component {
  constructor() {
    super();
    this.state = {
      redBagNumber: ""
    };
  }
  handleChange = e => {
    let redBagNumber = e.target.value;
    this.props.sendRedBagNumber({ redBagNumber });
    this.setState({ redBagNumber });
  };
  render() {
    return (
      <li className={"people"}>
        <div className={"sum"}>
          <span>红包个数</span>
          <input
            type="tel"
            placeholder={"填写个数"}
            value={this.state.redBagNumber}
            onChange={this.handleChange}
          />
          <span>个</span>
        </div>
        <div className={"tips"}>
          <span>本群共8人</span>
        </div>
      </li>
    );
  }
}

export default RedBagNumber;
