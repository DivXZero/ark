
export function configHasErrored(state = false, action) {
  switch (action.type) {
    case 'CONFIG_HAS_ERRORED':
      return action.hasErrored
    default:
      return state
  }
}

export function configIsLoading(state = false, action) {
  switch (action.type) {
    case 'CONFIG_IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}

export function config(state = {}, action) {
  switch (action.type) {
    case 'CONFIG_FETCH_SUCCESS':
      return action.config
    default:
      return state
  }
}
