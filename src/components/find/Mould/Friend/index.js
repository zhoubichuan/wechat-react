import React, { Component } from "react";
import Main from '@/public_components/Main'

class Album extends Component {
  constructor() {
    super();
    this.initConfig = {
      header: {
        left: { ico: 'back' },
        middle: '',
        right: { ico: 'camera' }
      },
      footer: false
    }
  }
  render () {
    return (
      <Main mainConfig={this.initConfig}>朋友圈</Main>
    );
  }
}
export default Album;
