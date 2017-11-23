import React from 'react'
import styled from 'styled-components'
import Tooltip from 'material-ui/Tooltip'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import PropTypes from 'prop-types'
import Router, { withRouter} from 'next/router'
import theme from './../theme'

const SideNavWithStyle = styled.div`
  position: fixed;
  top:0;
  left: 0;
  bottom:0;
  z-index:11;
  background-color: ${theme().color.black};
  width: 56px;
  .iconBox { 
      cursor: pointer;
      width: 100%;
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    i {
      font-size: ${theme().font.icon};
    }
  .content {
    color: #fff;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    height: 75%;
  }
  .active:before {
      content: '';
      position: absolute;
      left: 0;
      display: block;
      width: 3px;
      height: 24px;
      background: ${theme().color.primary};
    }
  }
  .setting {
    color: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .logo {
    width: 44px;
  }
`

const lists = [
  { key: '1', name: 'overview', url: '/', icon: 'sendicon-icon-dashboard-full' },
  { key: '2', name: 'location', url: '/location', icon: 'sendicon-icon-pin-map' },
  { key: '3', name: 'tracking', url: '/tracking', icon: 'sendicon-icon-truck' },
  { key: '4', name: 'profile', url: '/profile', icon: 'sendicon-icon-profile' }
]

const roles = {
  admin: ['1', '2', '3', '4']
}
const role = 'admin'

// console.log(roles[role])
let newLists = lists.map(list => {
  if (roles[role].indexOf(list.key) !== -1) {
    return list
  } else {
    return null
  }
}).filter(item => item)

export const SideNav = ({ handleClickedIcon, value, url }) => (
  <SideNavWithStyle>
    <div className='content'>
      <div className='iconBox'>
        <img src='/static/images/senditIcon.png' className='logo' />
      </div>
      {
        newLists.map((item, index) => (
          <div key={index} className='iconBox' onClick={() => handleClickedIcon(index, item.url)} >
            <Tooltip title={item.name} placement='right'>
              <i className={item.icon} />
            </Tooltip >
          </div>
        ))
      }
    </div>
    <div className='setting'>
      <div className='iconBox' >
        <Tooltip title='setting' placement='right'>
          <i className='sendicon-icon-settings' />
        </Tooltip >
      </div>
      <div className='iconBox' >
        <Tooltip title='off' placement='right'>
          <i className='sendicon-icon-poweroff' />
        </Tooltip >
      </div>
    </div>
  </SideNavWithStyle>
)

SideNav.propTypes = {
  handleClickedIcon: PropTypes.func,
  value: PropTypes.string,
  url: PropTypes.any
}

export default compose(
  withRouter,
  withState('value', 'setValue', ''),
  withHandlers({
    handleClickedIcon: ({ url }) => (index, url) => Router.push(url)
  }),
  lifecycle({
    componentDidMount () {
      let { pathname } = this.props.router
      let index = lists.findIndex(list => list.url === pathname)
      document.getElementsByClassName('iconBox')[index + 1].classList.add('active')
    }
  })
)(SideNav)
