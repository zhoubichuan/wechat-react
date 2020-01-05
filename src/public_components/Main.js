import React, { Component } from 'react'
import Header from '@/public_components/Header'
import Search from '@/public_components/Search'
import Footer from '@/public_components/Footer'

class Photo extends Component {
  constructor() {
    super()
  }
  handleClick = () => {
    window.history.go(0)
  }
  render() {
    return (
      <div>
        {this.props.mainConfig.header && (
          <Header headConfig={this.props.mainConfig.header} />
        )}
        {this.props.mainConfig.search && <Search />}
        {React.Children.map(this.props.children, (item, index) => item)}
        {this.props.mainConfig.footer !== false && <Footer />}
      </div>
    )
  }
}
export default Photo
