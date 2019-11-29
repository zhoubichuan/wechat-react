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
            <Route path="/message" component={Message} />
            <Route path="/messageSetting:id" component={Message} />
            <Route path="/messagePeople:id" component={Message} />
            <Route path="/people:id" component={Message} />
            <Route path="/people:id" component={Message} />
            <Route path="/address" component={Address} />
            <Route path="/addressFriends" component={Address} />
            <Route path="/addressNumber" component={Address} />
            <Route path="/addressTalk" component={Address} />
            <Route path="/addressTips" component={Address} />
            <Route path="/addressPeople:id" component={Address} />
            <Route path="/addressPeopleSettingAndTips" component={Address} />
            <Route path="/addressPeopleFriend:id" component={Address} />
            <Route
              path="/addressPeopleMoreInformation:id"
              component={Address}
            />
            <Route path="/sendInformation" component={Address} />
            <Route path="/find" component={Find} />
            <Route path="/findFriend" component={Find} />
            <Route path="/findGame" component={Find} />
            <Route path="/findNearby" component={Find} />
            <Route path="/findProgram" component={Find} />
            <Route path="/findScan" component={Find} />
            <Route path="/findSearch" component={Find} />
            <Route path="/findShake" component={Find} />
            <Route path="/findShop" component={Find} />
            <Route path="/me" component={Me} />
            <Route path="/meInformation" component={Me} />
            <Route path="/meInformationAddress" component={Me} />
            <Route path="/meInformationCode" component={Me} />
            <Route path="/meInformationMore" component={Me} />
            <Route path="/meInformationName" component={Me} />
            <Route path="/meInformationPhoto" component={Me} />
            <Route path="/meAlbum" component={Me} />
            <Route path="/meCardBag" component={Me} />
            <Route path="/meCollection" component={Me} />
            <Route path="/meEmoji" component={Me} />
            <Route path="/meMoneyBag" component={Me} />
            <Route path="/meSetting" component={Me} />
            <Route path="/meSettingAccountSafe" component={Me} />
            <Route path="/meSettingNewMessageNote" component={Me} />
            <Route path="/meSettingPrivacy" component={Me} />
            <Route path="/meSettingCommon" component={Me} />
            <Route path="/meSettingHelpAndFeedback" component={Me} />
            <Route path="/meSettingAboutWeChate" component={Me} />
            <Route path="/meSettingWeChatePlugin" component={Me} />
            <Route path="/meSettingChangeAcount" component={Me} />
            <Route path="/meSettingOutLogin" component={Me} />
            <Route path="/Login" component={Login} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}
export default App
