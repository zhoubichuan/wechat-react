import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '@/store'
// import Header from '@/public_components/Header'
// import Footer from '@/public_components/Footer'
import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom'
import Message from '@/components/Message/Message.js'
import Address from '@/components/address/Address.js'
import Find from '@/components/find/Find.js'
import Me from '@/components/Me/Me.js'
import MeAlbum from '@/components/Me/Album'
import MeCardBag from '@/components/Me/CardBag'
import MeCollection from '@/components/Me/Collection'
import MeEmoji from '@/components/Me/Emoji'
import MeInformation from '@/components/Me/Information'
import MeInformationPhoto from '@/components/Me/Information/Photo'
import MeInformationName from '@/components/Me/Information/Name'
import MeInformationMore from '@/components/Me/Information/More'
import MeInformationAddress from '@/components/Me/Information/Address'
import MeInformationCode from '@/components/Me/Information/Code'
import MeInformationNumber from '@/components/Me/Information/Number'
import MeMoneyBag from '@/components/Me/MoneyBag'
import MeSetting from '@/components/Me/Setting'
import Login from '@/components/Login/Login'

const routeData = [
  {
    path: '/',
    component: Message
  },
  {
    path: '/Message',
    component: Message
  },
  {
    path: '/MessageSetting:id',
    component: Message
  },
  {
    path: '/MessagePeople:id',
    component: Message
  },
  {
    path: '/people:id',
    component: Message
  },
  {
    path: '/people:id',
    component: Message
  },
  {
    path: '/address',
    component: Address
  },
  {
    path: '/addressFriends',
    component: Address
  },
  {
    path: '/addressNumber',
    component: Address
  },
  {
    path: '/addressTalk',
    component: Address
  },
  {
    path: '/addressTips',
    component: Address
  },
  {
    path: '/addressPeople:id',
    component: Address
  },
  {
    path: '/addressPeopleSettingAndTips',
    component: Address
  },
  {
    path: '/addressPeopleFriend:id',
    component: Address
  },
  {
    path: '/addressPeopleMoreInformation:id',
    component: Address
  },
  {
    path: '/sendInformation',
    component: Address
  },
  {
    path: '/find',
    component: Find
  },
  {
    path: '/findFriend',
    component: Find
  },
  {
    path: '/findGaMe',
    component: Find
  },
  {
    path: '/findNearby',
    component: Find
  },
  {
    path: '/findProgram',
    component: Find
  },
  {
    path: '/findScan',
    component: Find
  },
  {
    path: '/findSearch',
    component: Find
  },
  {
    path: '/findShake',
    component: Find
  },
  {
    path: '/findShop',
    component: Find
  },
  {
    path: '/Me',
    component: Me
  },
  {
    path: '/MeInformation',
    component: MeInformation
  },
  {
    path: '/MeInformationAddress',
    component: MeInformationAddress
  },
  {
    path: '/MeInformationCode',
    component: MeInformationCode
  },
  {
    path: '/MeInformationMore',
    component: MeInformationMore
  },
  {
    path: '/MeInformationName',
    component: MeInformationName
  },
  {
    path: '/MeInformationPhoto',
    component: MeInformationPhoto
  },
  {
    path: '/MeInformationNumber',
    component: MeInformationNumber
  },
  {
    path: '/MeAlbum',
    component: MeAlbum
  },
  {
    path: '/MeCardBag',
    component: MeCardBag
  },
  {
    path: '/MeCollection',
    component: MeCollection
  },
  {
    path: '/MeEmoji',
    component: MeEmoji
  },
  {
    path: '/MeEmoji',
    component: MeEmoji
  },
  {
    path: '/MeMoneyBag',
    component: MeMoneyBag
  },
  {
    path: '/MeSetting',
    component: MeSetting
  },
  {
    path: '/MeSettingAccountSafe',
    component: Me
  },
  {
    path: '/MeSettingNewMessageNote',
    component: Me
  },
  {
    path: '/MeSettingPrivacy',
    component: Me
  },
  {
    path: '/MeSettingCommon',
    component: Me
  },
  {
    path: '/MeSettingHelpAndFeedback',
    component: Me
  },
  {
    path: '/MeSettingAboutWeChate',
    component: Me
  },
  {
    path: '/MeSettingWeChatePlugin',
    component: Me
  },
  {
    path: '/MeSettingChangeAcount',
    component: Me
  },
  {
    path: '/MeSettingOutLogin',
    component: Me
  }
]
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            {/* <Header /> */}
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
              <Route
                path="/MeInformationAddress"
                component={MeInformationAddress}
              />
              <Route path="/MeInformationCode" component={MeInformationCode} />
              <Route path="/MeInformationMore" component={MeInformationMore} />
              <Route path="/MeInformationName" component={MeInformationName} />
              <Route
                path="/MeInformationPhoto"
                component={MeInformationPhoto}
              />
              <Route
                path="/MeInformationNumber"
                component={MeInformationNumber}
              />
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
            {/* <Footer /> */}
          </div>
        </Router>
      </Provider>
    )
  }
}
export default App
