import React, { Component } from "react";
import "./pop.css";
class ReadBagPopFloor extends Component {
  constructor() {
    super();
  }
  handleClick = () => {
    this.props.sendShowRedBagPopFloor({ showRedBagPop: false });
  };
  render() {
    return (
      <div className={"pop-floor show"}>
        <div className={"mask"} onClick={this.handleClick} />
        <div className={"get-bag"}>
          <span className={"delete"} onClick={this.handleClick}>
            x
          </span>
          <div>
            <div className={"top"}>
              <span className={"photo"} />
              <p>喂！我闪走了啊</p>
              <p>给你发一个红包</p>
            </div>
            <section className={"detail-information"}>
              <ul>
                {/* {this.props.bags.map(i => (
                  <RedBagReceive name={"2232"} val={i.i} />
                ))} */}
              </ul>
              <p className={"tips"}>
                该红包已超过24小时。如已领取，可在“我的红包”中查看
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
export default ReadBagPopFloor;
