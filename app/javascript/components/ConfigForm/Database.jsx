import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, change } from 'redux-form'
import { FileUpload } from '@blueprintjs/core'

import CodeEditor from '../CodeEditor'

class Database extends Component {

  uploadFile(event) {
    let file = event.target.files[0]
    let reader = new FileReader()
    reader.onload = (output) => {
      this.props.updateSQL(output.target.result)
    }
    if (file) {
      reader.readAsText(file)
    }
  }

  render() {
    return (
      <div>
        <label className="pt-label">
          SQL File
          <div className="pt-input-group">
            <span className="pt-icon pt-icon-document-open" />
            <FileUpload
              className="pt-input pt-fill"
              text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Upload a SQL Script..."
              onChange={this.uploadFile.bind(this)}
            />
          </div>
        </label>
        <label className="pt-label">
          Raw SQL
          <div className="pt-input-group">
            <Field
              type="text"
              name="database.sql"
              component={CodeEditor}
            />
          </div>
        </label>
      </div>
    )
  }
}

Database = connect(null, {
  updateSQL: (sql) => change('config', 'database.sql', sql)
})(Database)

export default Database
