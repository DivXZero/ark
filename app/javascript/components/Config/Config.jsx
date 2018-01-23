import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { configFetchData } from '../../actions/config'

class Config extends Component {
  componentDidMount() {
    this.props.fetchData('config')
  }

  render() {
    if (this.props.hasErrored) {
      return <p>An error was encountered while attempting to load the configuration</p>
    }

    if (this.props.isLoading) {
      return <p>Loading...</p>
    }

    return (
      <pre>{JSON.stringify(this.props.config, null, 2)}</pre>
    )
  }
}

Config.propTypes = {
  fetchData:  PropTypes.func.isRequired,
  config:     PropTypes.object.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading:  PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    config:     state.config,
    hasErrored: state.configHasErrored,
    isLoading:  state.configIsLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(configFetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Config)
