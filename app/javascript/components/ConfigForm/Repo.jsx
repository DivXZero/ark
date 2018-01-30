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
    <label className="pt-label">
      Username
      <div className="pt-input-group">
        <span className="pt-icon pt-icon-user" />
        <Field
          type="text"
          component="input"
          className="pt-input"
          name="repo.username" />
      </div>
    </label>
    <label className="pt-label">
      Password
      <div className="pt-input-group">
        <span className="pt-icon pt-icon-lock" />
        <Field
          type="password"
          component="input"
          className="pt-input"
          name="repo.password" />
      </div>
    </label>
  </div>
)

export default Repo
