import React from 'react'
import { Field } from 'redux-form'
import { Switch } from '@blueprintjs/core'

const Checkbox = (props) => <Switch checked={props.input.value} onChange={props.input.onChange} label={props.label} className="pt-large" />

const App = () => (
  <div>
    <Field
      type="checkbox"
      component={Checkbox}
      name="app.autoUpdate"
      label="Automatic updates"
    />
  </div>
)

export default App
