import React, { Component } from 'react'

import { Intent, Button } from '@blueprintjs/core'

import { getSetting, setSetting } from '../../util/Setting'

class Repo extends Component {
  constructor() {
    super()
    this.state = {
      app: {
        repo: ''
      }
    }
  }

  setApp(value) {
    this.setState({
      app: value
    })
  }

  handleChange(event) {
    this.setState({
      app: {
        repo: event.target.value
      }
    })
  }

  loadRepo() {
    getSetting('app', this.setApp.bind(this))
  }

  componentDidMount() {
    this.loadRepo()
  }

  cancelChanges() {
    this.loadRepo()
  }

  applyChanges() {
    setSetting('app', this.state.app, this.setApp.bind(this))
  }

  render() {
    return (
      <div>
        <label className="pt-label">
          Repo URL
          <div className="pt-input-group">
            <span className="pt-icon pt-icon-link" />
            <input
              type="text"
              className="pt-input"
              onChange={this.handleChange.bind(this)}
              value={this.state.app.repo} />
          </div>
        </label>
        <Button onClick={this.applyChanges.bind(this)} intent={Intent.PRIMARY}>Save</Button>
        <Button onClick={this.cancelChanges.bind(this)}>Cancel</Button>
      </div>
    )
  }
}

export default Repo
