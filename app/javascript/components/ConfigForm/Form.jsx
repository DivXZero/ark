import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { Button, Intent } from '@blueprintjs/core'

import { configFetchData } from '../../actions/config'
import { config as loadConfig } from '../../reducers/config'

class Form extends Component {
  componentDidMount() {
    this.props.fetchData('config')
  }

  submit(values) {
    // TODO: Wire this up so it updates store/backend
    console.log(values)
  }

  render() {
    if (this.props.hasErrored) {
      return <p>An error was encountered while attempting to load the configuration</p>
    }

    if (this.props.isLoading) {
      return <p>Loading...</p>
    }

    return (
      <form onSubmit={this.props.handleSubmit(this.submit.bind(this))}>
        {this.props.children}
        <Button type="submit" intent={Intent.PRIMARY} disabled={this.props.submitting}>Apply</Button>
        <Button onClick={this.props.reset} disabled={this.props.pristine || this.props.submitting}>Reset</Button>
      </form>
    )
  }
}

Form.propTypes = {
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

Form = connect(mapStateToProps, mapDispatchToProps)(Form)

Form = reduxForm({
  form: 'config',
  enableReinitialize: true
})(Form)

Form = connect(
  state => ({
    initialValues: state.config
  }),
  { load: loadConfig }
)(Form)

export default Form
