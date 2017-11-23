import React from 'react'
import { compose } from 'recompose'
import styled from 'styled-components'

import withRoot from './withRoot'

import NavBar from './../components/Navbar'
import SideNav from './../components/SideNav'

const ContentStyle = styled.div`
  margin-top: 100px;
  margin-left: 56px;
  height: 100%;
`

const enhance = compose(
  withRoot
)

const Layout = (Component) => {
  return enhance(class WithLayout extends React.Component {
    render () {
      return (<div>
        <NavBar />
        <SideNav />
        <ContentStyle>
          <Component />
        </ContentStyle>
      </div>)
    }
  })
}

export default Layout
