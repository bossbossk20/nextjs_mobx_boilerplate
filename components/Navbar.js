import React from 'react'
import styled from 'styled-components'

import SelectDropdown from './../components/SelectDropdown'
import SearchBox from './../components/SearchBox'
import QuickTourButton from './../components/QuickTourButton'
import theme from './../theme'

const NavBarStyle = styled.div`
  /* padding: 20px 10px; */
  color: ${theme().color.white};
  background-color: ${theme().color.black};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: 50px;
  display: flex;
  margin-left:50px;
  .content {
    margin-left: 25px;
    display: flex;
    align-items: center;
    width: 100%;
    .logo {
      width: 140px;
      height: 35px;
    }
    .right {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      align-items: center;
    }
  }
`

const Icon = styled.div`
  margin: 0 10px;
  display: flex;
  align-items: center;
  i {
    font-size: ${theme().font.icon};
  }
  .profile {
    width: 35px;
    height: 35px;
  }
`

// const value = ''

const NavBar = () => (
  <NavBarStyle>
    <div className='content'>
      <SelectDropdown />
      <div className='right'>
        <SearchBox />
        <QuickTourButton />
        <Icon >
          <i className='sendicon-icon-world' />
        </Icon>
        <Icon >
          <i className='sendicon-icon-alarm' />
        </Icon>
        <Icon >
          <i className='sendicon-icon-more-icon' />
        </Icon>
        <Icon >
          <img className='profile' src='/static/images/profile.png' />
        </Icon>
      </div>
    </div>
  </NavBarStyle>
)

export default NavBar
