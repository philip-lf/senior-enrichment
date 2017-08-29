'use strict'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Header from './components/Header'
import MainPage from './components/MainPage'

render(
  <Provider store={store}>
    <div>
      <Header />
      <MainPage/>
    </div>
  </Provider>,
  document.getElementById('main')
)