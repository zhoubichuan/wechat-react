import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.less'
import Message from '@/components/message/Message.js'
import Address from '@/components/address/Address.js'
import Find from '@/components/find/Find.js'
import Me from '@/components/me/Me.js'
import Login from '@/components/Login/Login.js'
import store from '@/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Message} />
            <Route path="/Message" component={Message} />
            <Route path="/Address" component={Address} />
            <Route path="/Find" component={Find} />
            <Route path="/Me" component={Me} />
            <Route path="/Login" component={Login} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}
export default App
