import { combineReducers } from 'redux'

import { configHasErrored, configIsLoading, config } from './config'

export default combineReducers({
  configHasErrored,
  configIsLoading,
  config
})
