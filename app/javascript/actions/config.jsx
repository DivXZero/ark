
import { BASE_URL, JSON_HEADERS } from '../util/Env'

export function configHasErrored(bool) {
  return {
    type: 'CONFIG_HAS_ERRORED',
    hasErrored: bool
  }
}

export function configIsLoading(bool) {
  return {
    type: 'CONFIG_IS_LOADING',
    isLoading: bool
  }
}

export function configFetchSuccess(config) {
  return {
    type: 'CONFIG_FETCH_SUCCESS',
    config
  }
}

export function configFetchData() {
  return (dispatch) => {
    dispatch(configIsLoading(true))

    fetch(BASE_URL + '/config', {
      method: 'GET',
      headers: JSON_HEADERS
    })
      .then((response) => {
        if (!response.ok) {
          console.log(response.statusText)
          throw Error(response.statusText)
        }

        return response.json()
      })
      .then((response) => dispatch(configFetchSuccess(response)))
      .catch(() => dispatch(configHasErrored(true)))

    dispatch(configIsLoading(false))
  }
}

export function configSubmitData(config) {
  return (dispatch) => {
    dispatch(configIsLoading(true))

    fetch(BASE_URL + '/config', {
      method: 'POST',
      headers: JSON_HEADERS,
      body: JSON.stringify({ "config": config })
    })
      .then((response) => {
        if (!response.ok) {
          console.log(response.statusText)
          throw Error(response.statusText)
        }

        return response.json()
      })
      .then((response) => dispatch(configFetchSuccess(response)))
      .catch(() => dispatch(configHasErrored(true)))

    dispatch(configIsLoading(false))
  }
}
