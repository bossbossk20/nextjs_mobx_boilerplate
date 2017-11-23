import React, { Component } from 'react'
import styled from 'styled-components'
import theme from './../theme'

const Button = styled.div`
  margin: 0 10px;
  background-color: ${theme().color.black};
  color: ${theme().color.white};
  display: flex;
  justify-content: center;
  border: 2px solid ${theme().color.darkGray};
  width: 180px;
  .side {
    display: flex;
    justify-content: center;
    align-items:center;
    cursor: pointer;
    width: 90px;
    height: 26px;
    font-size: ${theme().font.primary};
  }
`

type Props = {
  handle: (side: string) => void,
  leftTitle: string,
  rightTitle: string
}
export default class ToggleBtn extends Component <Props> {
  state = {
    toggle: 'left'
  }
  handleClick = (side) => {
    this.setState({ toggle: side })
    this.props.handle(side)
  }
  render () {
    const { toggle } = this.state
    const { leftTitle, rightTitle } = this.props
    if (toggle === 'right') {
      return (
        <Button >
          <a className='side'
            style={{backgroundColor: theme().color.lightBlack}}
            onClick={() => this.handleClick('left')}>
            {leftTitle}
          </a>
          <a className='side' style={{backgroundColor: theme().color.primary, color: theme().color.black}}>{rightTitle}</a>
        </Button>
      )
    } else {
      return (
        <Button >
          <a className='side' style={{backgroundColor: theme().color.primary, color: theme().color.black}}>{leftTitle}</a>
          <a
            className='side'
            style={{backgroundColor: theme().color.lightBlack}}
            onClick={() => this.handleClick('right')}>
            {rightTitle}
          </a>
        </Button>
      )
    }
  }
}
