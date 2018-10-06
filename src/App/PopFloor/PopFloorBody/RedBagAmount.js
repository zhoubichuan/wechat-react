import React, { Component } from "react";
/* 受控组件 */
class RedBagAmount extends Component {
  constructor() {
    super();
    this.state = {
      redBagAmount: ""
    };
  }
  handleChange = e => {
    let redBagAmount = e.target.value;
    this.props.sendRedBagAmount({ redBagAmount });
    this.setState({ redBagAmount });
  };
  render() {
    return (
      <li className={"money"}>
        <div className={"sum"}>
          <i>拼</i>
          <span>总金额</span>
          <input
            type="tel"
            maxLength="7"
            placeholder={"0.00"}
            value={this.state.redBagAmount}
            onChange={this.handleChange}
          />
          <span>元</span>
        </div>
        <div className={"tips"}>
          <span>当前为拼手气红包,</span>
          <a>改为普通红包</a>
        </div>
      </li>
    );
  }
}

export default RedBagAmount;
