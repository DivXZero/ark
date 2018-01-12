import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../../views/Home'
import Branches from '../../views/Branches'
import Info from '../../views/Info'
import Configure from '../../views/Configure'
import NotFound from '../../views/NotFound'

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/branches" component={Branches} />
    <Route path="/info" component={Info} />
    <Route path="/config" component={Configure} />
    <Route component={NotFound} />
  </Switch>
)

export default Router
