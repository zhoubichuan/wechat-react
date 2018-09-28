import React, { Component } from "react";
import ListItem from "./ListItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class GetPage extends Component {
  static PropTypes = {
    bags: PropTypes.array
  };
  constructor() {
    super();
    this.state = {
      maskShow: false
    };
  }
  showMask() {
    this.setState({
      maskShow: true
    });
  }
  hideMask() {
    this.setState({
      maskShow: false
    });
  }
  render() {
    this;
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
                  {this.props.bags.map(i => (
                    <ListItem name={"2232"} val={i.i} />
                  ))}
                </ul>
                <p className={"tips"}>
                  该红包已超过24小时。如已领取，可在“我的红包”中查看
                </p>
              </section>
            </div>
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
GetPage = connect(mapStateToProps)(GetPage);
export default GetPage;
