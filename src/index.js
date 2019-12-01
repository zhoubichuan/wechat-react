import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'
import store from '@/store'
import Router from './router'
import './style-base.less'
import Header from '@/public_components/Header'
import Footer from '@/public_components/Footer'

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.querySelector('#root')
)
