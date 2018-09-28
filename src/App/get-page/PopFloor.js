import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ListItem from "./ListItem";

class PopFloor extends Component {
  static PropTypes = {
    bags: PropTypes.array
  };
 
  render() {
    return (
      <div className={this.props.maskShow ? "pop-floor show" : "pop-floor"}>
        <div className={"mask"} />
        <div className={"get-bag"}>
          <span className={"delete"} onClick={this.hideMask.bind(this)}>
            x
          </span>
          <div>
            <header className={"person-information"}>
              <span>头像</span>
              <p>喂！我闪走了啊</p>
              <p>给你发一个红包</p>
            </header>
            <section className={"detail-information"}>
              <ul>
                {this.props.bags.map(i => {
                  <ListItem name={"2232"} val={i} />;
                })}
              </ul>
              <p>该红包已超过24小时。如已领取，可在“我的红包”中查看</p>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    bags: state.bags
  };
};
PopFloor = connect(mapStateToProps)(PopFloor);
export default PopFloor;
