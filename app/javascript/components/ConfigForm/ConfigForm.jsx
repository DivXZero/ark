import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import {
  Icon,
  Button,
  Intent,
  Tab2 as Tab,
  Tabs2 as Tabs
} from '@blueprintjs/core'

import { configFetchData } from '../../actions/config'
import { config as loadConfig } from '../../reducers/config'

import Repo from './Repo'
import Database from '../../views/Config/Database'

class ConfigForm extends Component {
  componentDidMount() {
    this.props.fetchData('config')
  }

  submit(values) {
    // TODO: Wire this up to update the values on the backend
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
        <Tabs id="config-tabs" large={true}>
          <Tab
            id="config-repo-tab"
            panel={<Repo />}>
            <Icon iconName="git-repo" /> Git Repository
          </Tab>
          <Tab
            id="config-database-tab"
            panel={<Database />}>
            <Icon iconName="database" /> SQL Database
          </Tab>
        </Tabs>
        <Button type="submit" intent={Intent.PRIMARY} disabled={this.props.submitting}>Apply</Button>
        <Button onClick={this.props.reset} disabled={this.props.pristine || this.props.submitting}>Reset</Button>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </form>
    )
  }
}

ConfigForm.propTypes = {
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

ConfigForm = connect(mapStateToProps, mapDispatchToProps)(ConfigForm)

ConfigForm = reduxForm({
  form: 'config'
})(ConfigForm)

ConfigForm = connect(
  state => ({
    initialValues: state.config
  }),
  { load: loadConfig }
)(ConfigForm)

export default ConfigForm
