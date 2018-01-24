import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { configHasErrored, configIsLoading, config } from './config'

export default combineReducers({
  form: formReducer,
  configHasErrored,
  configIsLoading,
  config
})
