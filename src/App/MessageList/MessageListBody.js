import React, { Component } from "react";
import ListItem from "./ListItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RedBagPopFloor from "./RedBagPopFloor";

class MessageListBody extends Component {
  static PropTypes = {
    bags: PropTypes.array
  };
  constructor() {
    super();
    this.state = {
      maskShow: false,
      bags: []
    };
  }
  showMask() {
    this.setState({
      maskShow: true
    });
  }

  render() {
    return (
      <div>
        <ul className={"information"}>
          <li>
            <i className={"photo"} />
            <div className={"content"}>
              <p className={"name"}>腾讯员工</p>
              <p>嘿嘿我来了</p>
            </div>
          </li>
          <li>
            <i className={"photo"} />
            <div className={"content"}>
              <p className={"name"}>百度员工</p>
              <p>匿名人士</p>
            </div>
          </li>
          <li>
            <i className={"photo"} />
            <div className={"content"}>
              <p className={"name"}>华为老大哥</p>
              <p>你过来</p>
            </div>
          </li>
          <li>
            <i className={"photo"} />
            <div className={"content"}>
              <p className={"name"}>阿里巴巴2</p>
              <div className={"red-bag"} onClick={this.showMask.bind(this)}>
                <div className={"bag"}>
                  <span className={"ico"} />
                  <div className={"text"}>
                    <p>恭喜发财，大吉大利</p>
                    <p>领取红包</p>
                  </div>
                </div>
                <p className={"instruction"}>微信红包</p>
              </div>
            </div>
          </li>
        </ul>
        <RedBagPopFloor />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    // bags: state.bags
  };
};
MessageListBody = connect(mapStateToProps)(MessageListBody);
export default MessageListBody;
