import React from 'react'
import { Field } from 'redux-form'

const Database = () => (
  <div>
    <label className="pt-label">
      SQL
      <div className="pt-input-group">
        <Field
          type="text"
          rows="20"
          component="textarea"
          className="pt-input"
          name="database.sql" />
      </div>
    </label>
  </div>
)

export default Database
