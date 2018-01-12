import React from 'react'

import {
  Intent,
  Callout
} from '@blueprintjs/core'

const NotFound = () => (
  <Callout intent={Intent.WARNING} iconName="warning-sign">
    <h5>Not Found</h5>
    The resource you are looking for doesn't seem to exist
  </Callout>
)

export default NotFound
