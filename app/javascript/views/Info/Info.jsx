import React, { Component } from 'react'

import { BASE_URL } from '../../util/Env'

class Info extends Component {
  constructor() {
    super()
    this.state = {
      info: null
    }
  }

  componentDidMount() {
    fetch(BASE_URL + '/info.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          info: responseJson
        })
      })
  }

  render() {
    return (
      <div>
        <h3>Info</h3>
        <hr />
        <pre>{JSON.stringify(this.state.info, null, 2)}</pre>
      </div>
    )
  }
}

export default Info
