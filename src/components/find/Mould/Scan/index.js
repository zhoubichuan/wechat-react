import React, { Component } from "react";
import Main from '@/public_components/Main'

class Scan extends Component {
  constructor() {
    super();
    this.initConfig = {
      header: {
        left: { ico: 'back' },
        middle: '扫一扫',
      },
      footer: false
    }
  }
  render () {
    return (
      <Main mainConfig={this.initConfig}>
        <div component={"me-Scan-component"}>相册</div>
      </Main>
    );
  }
}
export default Scan;
