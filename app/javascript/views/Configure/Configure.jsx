import React from 'react'

import {
  Icon,
  Tab2 as Tab,
  Tabs2 as Tabs
} from '@blueprintjs/core'

import Repo from './Repo'
import Database from './Database'
import Updates from './Updates'

const Configure = () => (
  <div>
    <h3 className="page-title">Configuration</h3>
    <Tabs id="config-tabs" large={true}>
      <Tab id="config-repo-tab" panel={<Repo />}><Icon iconName="git-repo" /> Git Repository</Tab>
      <Tab id="config-sql-tab" panel={<Database />}><Icon iconName="database" /> SQL Database</Tab>
      <Tab id="config-app-updates" panel={<Updates />}><Icon iconName="refresh" /> Updates</Tab>
    </Tabs>
  </div>
)

export default Configure
