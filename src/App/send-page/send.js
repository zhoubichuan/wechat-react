import React, { Component } from "react";
import SendPage from "./SendPage";
import { setArgu } from "./action";
import { connect } from "react-redux";

class send extends Component {
  handleState(args) {
    if (this.props.onSubmit) {
      this.props.onSubmit(args);
    }
  }
  render() {
    return <SendPage onSubmit={this.handleState.bind(this)} />;
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onSubmit({ money, redBagNum }) {
      dispatch(setArgu({ money, redBagNum }));
    }
  };
};
send = connect(null, mapDispatchToProps)(send);
export default send;
