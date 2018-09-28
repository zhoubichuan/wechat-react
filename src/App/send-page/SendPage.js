import React, { Component } from "react";
import { Link } from "react-router-dom";

class SendPage extends Component {
  constructor() {
    super();
    this.state = {
      textTips: "",
      money: "",
      moneyTips: "",
      redBagNum: "",
      redBagTips: "",
      people: "",
      text: ""
    };
  }
  handleMoney(e) {
    var val = e.target.value;
    if (val.length < 7) {
      if (0 <= val) {
        if (/\./.test(val) && val.length >= 4 && val < 0.01) {
          return;
        }
        this.setState({
          money: val
        });
      }
      console.log(val);
    }
  }
  handleRedBagNum(e) {
    var val = e.target.value;
    this.setState({
      redBagNum: val
    });
    console.log(val);
  }
  contentText(e) {
    var val = e.target.value;
    this.setState({ text: val });
    console.log(val);
  }
  handleSubmit(e) {
    const { money, redBagNum } = this.state;
    this.props.onSubmit({ money, redBagNum });
    // e.preventDefault();
  }
  render() {
    return (
      <div className={"app"}>
        <header className={"header"}>
          <span className={"cancle"}>取消</span>
          <h1 className={"title"}>发红包</h1>
          <span className={"more"}>...</span>
        </header>
        <section className="main">
          <div>{this.state.textTips}</div>
          <ul className={"message"}>
            <li className={"money"}>
              <div className={"sum"}>
                <i>拼</i>
                <span>总金额</span>
                <input
                  type="tel"
                  placeholder={"0.00"}
                  value={this.state.money}
                  onChange={this.handleMoney.bind(this)}
                />
                <span>元</span>
              </div>
              <div className={"tips"}>
                <span>当前为拼手气红包,</span>
                <a>改为普通红包</a>
              </div>
            </li>
            <li className={"people"}>
              <div className={"sum"}>
                <span>红包个数</span>
                <input
                  type="tel"
                  placeholder={"填写个数"}
                  value={this.state.redBagNum}
                  onChange={this.handleRedBagNum.bind(this)}
                />
                <span>个</span>
              </div>
              <div className={"tips"}>
                <span>本群共8人</span>
              </div>
            </li>
            <li className={"tips"}>
              <input
                type="text"
                placeholder={"恭喜发财，大吉大利"}
                value={this.state.text}
                onChange={this.contentText.bind(this)}
              />
            </li>
          </ul>
          <div className={"submit"}>
            <p>￥{Number(this.state.money) || "0"}.00</p>
            <Link to="/get" onClick={this.handleSubmit.bind(this)}>
              塞钱进红包
            </Link>
          </div>
        </section>
        <footer className="footer">
          <p>未领取的红包，将于24小时后发起退款</p>
        </footer>
      </div>
    );
  }
}
export default SendPage;
