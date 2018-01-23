import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from '../components/App'
import configureStore from '../store/configureStore'

const appStore = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render((
    <Provider store={appStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ),
    document.getElementById('react-root'),
  )
})
