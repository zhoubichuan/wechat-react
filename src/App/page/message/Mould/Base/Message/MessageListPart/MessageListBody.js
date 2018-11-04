import React, { Component } from "react";
import RedBagReceive from "./RedBagGet/RedBagReceive";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RedBagPopFloor from "./RedBagGet/RedBagPopFloor.js";
import RedBagGet from "./RedBagGet/RedBagGet.js";

class MessageListBody extends Component {
  // static PropTypes = {
  //   bags: PropTypes.array
  // };
  constructor() {
    super();
    this.state = {
      showRedBagPop: false
    };
  }

  getShowRedBagPop(val) {
    this.setState(val);
  }
  getShowRedBagPopFloor(val) {
    this.setState(val);
  }
  getScrollStopChild(val) {
    this.props.sendScrollStop(val);
  }
  render() {
    return (
      <div>
        <ul className={"information"} onClick={this.handleClick}>
          {this.props.messageData.map((val, index) => (
            <li key={index} className={val.self ? "right" : ""}>
              <img src={val.pho} className={"photo"} />
              <div className={"content"}>
                <p className={"name"}>{val.name}</p>
                {!val.redBag.redBag && <p>{val.message}</p>}
                {val.redBag.redBag && (
                  <RedBagGet
                    sendShowRedBagPop={val => this.getShowRedBagPop(val)}
                    {...val.redBag}
                    sendScrollStopChild={val => this.getScrollStopChild(val)}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
        {this.state.showRedBagPop && (
          <RedBagPopFloor
            sendShowRedBagPopFloor={val => this.getShowRedBagPopFloor(val)}
          />
        )}
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
