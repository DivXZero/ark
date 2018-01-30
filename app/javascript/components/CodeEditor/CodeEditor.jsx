import React from 'react'
import brace from 'brace'
import AceEditor from 'react-ace'

import 'brace/mode/sql'
import 'brace/theme/tomorrow_night'

const CodeEditor = (props) => (
  <AceEditor
    mode="sql"
    width="100%"
    theme="tomorrow_night"
    name={props.input.name}
    value={props.input.value}
    onChange={props.input.onChange}
    tabSize={2}
    editorProps={{
      $blockScrolling: true
    }}
  />
)

export default CodeEditor
