import React, { Component } from "react";

class ReadBagPopFloor extends Component {
  constructor() {
    super();
    this.state = {
      maskShow: false
    };
  }
  hideMask() {
    this.setState({
      maskShow: false
    });
  }
  render() {
    return (
      <div className={this.state.maskShow ? "pop-floor show" : "pop-floor"}>
        <div className={"mask"} onClick={this.hideMask.bind(this)} />
        <div className={"get-bag"}>
          <span className={"delete"} onClick={this.hideMask.bind(this)}>
            x
          </span>
          <div>
            <header className={"person-information"}>
              <span className={"photo"} />
              <p>喂！我闪走了啊</p>
              <p>给你发一个红包</p>
            </header>
            <section className={"detail-information"}>
              <ul>
                {/* {this.props.bags.map(i => (
                    <ListItem name={"2232"} val={i.i} />
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
