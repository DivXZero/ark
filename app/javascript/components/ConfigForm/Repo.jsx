import React from 'react'
import { Field } from 'redux-form'

const Repo = () => (
  <div>
    <label className="pt-label">
      Repo URL
      <div className="pt-input-group">
        <span className="pt-icon pt-icon-link" />
        <Field
          type="text"
          component="input"
          className="pt-input"
          name="repo.url" />
      </div>
    </label>
  </div>
)

export default Repo
