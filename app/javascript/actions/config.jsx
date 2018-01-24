
import { BASE_URL } from '../util/Env'

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

export function configFetchData(url) {
  return (dispatch) => {
    dispatch(configIsLoading(true))

    fetch(BASE_URL + '/' + url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (!response.ok) {
          console.log(response.statusText)
          throw Error(response.statusText)
        }

        return response.json()
      })
      .then((config) => dispatch(configFetchSuccess(config)))
      .catch(() => dispatch(configHasErrored(true)))

    dispatch(configIsLoading(false))
  }
}
