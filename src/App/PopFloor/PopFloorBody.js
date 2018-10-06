import React, { Component } from "react";
import { Link } from "react-router-dom";
import RedBagAmount from "./PopFloorBody/RedBagAmount";
import RedBagNumber from "./PopFloorBody/RedBagNumber";
import RedBagMessage from "./PopFloorBody/RedBagMessage";

class PopFloorBody extends Component {
  constructor() {
    super();
    this.state = {
      inputErrorTips: ""
    };
  }
  getRedBagAmount(amount) {
    if (amount > 20000) {
      this.setState({ inputErrorTips: "单次支付总额不可超过20000元" });
    }
  }
  getRedBagNumber(number) {
    if (number > 100) {
      this.setState({ inputErrorTips: "一次最多发100个红包" });
    }
  }
  getRedBagMessage(message) {
    console.log(message);
  }
  handleSubmit(e) {
    const { money, redBagNum } = this.state;
    this.props.onSubmit({ money, redBagNum });
    // e.preventDefault();
  }
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
          <Link to="/get" onClick={this.handleSubmit.bind(this)}>
            塞钱进红包
          </Link>
        </div>
      </section>
    );
  }
}
export default PopFloorBody;
