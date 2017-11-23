import React from 'react'
import styled from 'styled-components'
import { compose } from 'recompose'
import { withRouter } from 'next/router'

import theme from './../theme'
import ToggleButton from './../components/ToggleButton'

const TitleBarStyle = styled.div`
  background-color: ${theme().color.lightBlack};
  position: fixed;
  z-index: 10;
  top: 50px;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 56px;
  .title {
    color: #FFF;
    text-transform: uppercase;
    font-size: ${theme().font.title};
    font-weight: bold;
    margin-right: 25px;
    .slash {
      color: ${theme().color.primary};
      margin: 0 5px;
      font-size: ${theme().font.icon};
    }
  }
`

const ToggleBox = styled.div`
  display: flex;
`

const handleTitle = (pathname) => {
  switch (pathname) {
    case '/location' :
      return <ToggleBox>
        <ToggleButton leftTitle='LIVE' rightTitle='HISTORY' />
        <ToggleButton leftTitle='TRUCK' rightTitle='DRIVER' />
      </ToggleBox>
  }
}

type Props = {
  router: Object
}

const TitleBar = (props: Props) => {
  return (
    <TitleBarStyle >
      <span className='title'>
        <i className='sendicon-icon-slash-mini slash' />
        { props.router.pathname === '/' ? 'overview' : props.router.pathname.substr(1, props.router.pathname.length) }
      </span>
      { handleTitle(props.router.pathname) }
    </TitleBarStyle >
  )
}

export default compose(
  withRouter
)(TitleBar)
