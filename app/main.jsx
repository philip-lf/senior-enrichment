'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/Root'
import MainPage from './components/MainPage'

render (
  <Provider store={store}>
    <div> 
      <MainPage />
    </div>
    {/* <Root/> */}
  </Provider>,
  document.getElementById('main')
)