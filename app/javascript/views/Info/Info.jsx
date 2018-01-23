import React, { Component } from 'react'

import { Intent, Spinner } from '@blueprintjs/core'

import { BASE_URL } from '../../util/Env'

class Info extends Component {
  constructor() {
    super()
    this.state = {
      data: null,
      loading: true
    }
  }

  componentDidMount() {
    fetch(BASE_URL + '/info.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: responseJson,
          loading: false
        })
      })
  }

  render() {
    let content;

    if (this.state.loading) {
      content = <Spinner intent={Intent.PRIMARY} />
    } else {
      content = JSON.stringify(this.state.data, null, 2)
    }

    return (
      <div>
        <h3>Info</h3>
        <hr />
        <pre>{content}</pre>
      </div>
    )
  }
}

export default Info
