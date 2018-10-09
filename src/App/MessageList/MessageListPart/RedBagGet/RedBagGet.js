import React, { Component } from "react";
class RedBagGet extends Component {
  constructor() {
    super();
  }

  handleClick = () => {
    this.props.sendShowRedBagPop({ showRedBagPop: true });
    this.props.sendScrollStopChild({ scrollStop: true });
  };
  render() {
    return (
      <div className={"red-bag"} onClick={this.handleClick}>
        <div className={"bag"}>
          <span className={"ico"} />
          <div className={"text"}>
            <p>{this.props.tips}</p>
            <p>
              {-(this.props.sendTime - new Date().getTime) / 1000 / 60 / 60 > 24
                ? "红包已过期"
                : "领取红包"}
            </p>
          </div>
        </div>
        <p className={"instruction"}>微信红包</p>
      </div>
    );
  }
}

export default RedBagGet;
