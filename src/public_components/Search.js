import React, { Component } from 'react'
import './Search.less'

class Search extends Component {
  // constructor() {
  //   super()
  // }
  render () {
    return (
      <div className={'top-search'}>
        <input placeholder={'搜索'} />
      </div>
    )
  }
}
export default Search
