import React, { Component } from "react";
import RedBagAmount from "./SendRedBagBody/SendRedBagAmount";
import RedBagNumber from "./SendRedBagBody/SendRedBagNumber";
import RedBagMessage from "./SendRedBagBody/SendRedBagMessage";

class SendRedBagBody extends Component {
  constructor() {
    super();
    this.state = {
      inputErrorTips: "",
      amount: "",
      number: "",
      message: ""
    };
  }
  getRedBagAmount(amount) {
    this.setState({ amount });
    if (amount > 20000) {
      this.setState({ inputErrorTips: "单次支付总额不可超过20000元" });
    }
  }
  getRedBagNumber(number) {
    this.setState({ number });
    if (number > 100) {
      this.setState({ inputErrorTips: "一次最多发100个红包" });
    }
  }
  getRedBagMessage(message) {
    this.setState({ message });
  }
  handleSubmit = () => {
    const { amount, number, message } = this.state;
    this.props.sendSubmit({ amount, number, message });
    this.props.sendSendRedBagShowChild({ SendRedBagShow: false });
    // e.preventDefault();
  };
  render() {
    return (
      <section className="main">
        <div>{this.state.inputErrorTips}</div>
        <ul className={"message"}>
          <RedBagAmount
            sendRedBagAmount={amount => this.getRedBagAmount(amount)}
          />
          <RedBagNumber
            sendRedBagNumber={number => this.getRedBagNumber(number)}
          />
          <RedBagMessage
            sendRedBagMessage={message => this.getRedBagMessage(message)}
          />
        </ul>
        <div className={"submit"}>
          <p>￥{Number(this.state.money) || "0"}.00</p>
          <a href="#" onClick={this.handleSubmit}>
            塞钱进红包
          </a>
        </div>
      </section>
    );
  }
}
export default SendRedBagBody;
