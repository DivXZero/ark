import React from 'react'
import { Link } from 'react-router-dom'

import {
  Button,
  Navbar,
  NavbarGroup,
  NavbarDivider
} from '@blueprintjs/core'

const Header = () => (
  <Navbar className="pt-fixed-top">
    <NavbarGroup>
      <Link to="/" className="pt-navbar-heading">WP DeployBot</Link>
    </NavbarGroup>
    <NavbarGroup align="right">
      <Link to="/branches"><Button className="pt-minimal" iconName="git-branch">Branches</Button></Link>
      <NavbarDivider />
      <Link to="/info"><Button className="pt-minimal" iconName="info-sign" /></Link>
      <Link to="/config"><Button className="pt-minimal" iconName="cog" /></Link>
    </NavbarGroup>
  </Navbar>
)

export default Header
