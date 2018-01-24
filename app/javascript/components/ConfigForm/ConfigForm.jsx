import React from 'react'

import {
  Icon,
  Tab2 as Tab,
  Tabs2 as Tabs
} from '@blueprintjs/core'

import Form from './Form'
import Repo from './Repo'
import Database from './Database'

const ConfigForm = () => (
  <Form>
    <Tabs id="config-tabs" large={true}>
      <Tab
        id="config-repo-tab"
        panel={<Repo />}>
        <Icon iconName="git-repo" /> Git Repository
      </Tab>
      <Tab
        id="config-database-tab"
        panel={<Database />}>
        <Icon iconName="database" /> SQL Database
      </Tab>
    </Tabs>
  </Form>
)

export default ConfigForm
