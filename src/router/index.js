import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.less'
import Message from '@/components/Message/Message.js'
import Address from '@/components/address/Address.js'
import Find from '@/components/find/Find.js'
import Me from '@/components/Me/Me.js'
import MeAlbum from '@/components/Me/Album'
import MeCardBag from '@/components/Me/CardBag'
import MeCollection from '@/components/Me/Collection'
import MeEmoji from '@/components/Me/Emoji'
import MeInformation from '@/components/Me/Information'
import MeMoneyBag from '@/components/Me/MoneyBag'
import MeSetting from '@/components/Me/Setting'
import Login from '@/components/Login/Login'
import store from '@/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Message} />
            <Route path="/Message" component={Message} />
            <Route path="/MessageSetting:id" component={Message} />
            <Route path="/MessagePeople:id" component={Message} />
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
            <Route path="/findGaMe" component={Find} />
            <Route path="/findNearby" component={Find} />
            <Route path="/findProgram" component={Find} />
            <Route path="/findScan" component={Find} />
            <Route path="/findSearch" component={Find} />
            <Route path="/findShake" component={Find} />
            <Route path="/findShop" component={Find} />
            <Route path="/Me" component={Me} />
            <Route path="/MeInformation" component={MeInformation} />
            <Route path="/MeInformationAddress" component={Me} />
            <Route path="/MeInformationCode" component={Me} />
            <Route path="/MeInformationMore" component={Me} />
            <Route path="/MeInformationNaMe" component={Me} />
            <Route path="/MeInformationPhoto" component={Me} />
            <Route path="/MeAlbum" component={MeAlbum} />
            <Route path="/MeCardBag" component={MeCardBag} />
            <Route path="/MeCollection" component={MeCollection} />
            <Route path="/MeEmoji" component={MeEmoji} />
            <Route path="/MeMoneyBag" component={MeMoneyBag} />
            <Route path="/MeSetting" component={MeSetting} />
            <Route path="/MeSettingAccountSafe" component={Me} />
            <Route path="/MeSettingNewMessageNote" component={Me} />
            <Route path="/MeSettingPrivacy" component={Me} />
            <Route path="/MeSettingCommon" component={Me} />
            <Route path="/MeSettingHelpAndFeedback" component={Me} />
            <Route path="/MeSettingAboutWeChate" component={Me} />
            <Route path="/MeSettingWeChatePlugin" component={Me} />
            <Route path="/MeSettingChangeAcount" component={Me} />
            <Route path="/MeSettingOutLogin" component={Me} />
            <Route path="/Login" component={Login} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}
export default App
