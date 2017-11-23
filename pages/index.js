import React from 'react'
import { compose } from 'recompose'
import styled from 'styled-components'
import { observer, inject } from 'mobx-react'
import Layout from './../layouts/Layout'
import TitleBar from './../components/TitleBar'

const List = styled.div`
  position: fixed;
  top: 125px;
  right: 20px;
  width: 250px;
  height: 350px;
  box-shadow: 1px 1px 10px rgba(0,0,0, 0.16);
  background-color: #fff;
  height: 3600px;
  .header {
    margin: 15px 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
    overflow-y: auto;
  }
  .content {
    margin: 15px 10px;
    height: 100%;
  }
`

const Index = (props) => (
  <div>
    <TitleBar />
    test
    <div style={{backgroundColor: '#F2F2F2'}}>
      <List >
        <div className='header'>
          HEADER
        </div>
        <div className='content'>
          test
        </div>
      </List>
    </div>
  </div>
)

const enchance = compose(
  Layout,
  inject('AuthStore'),
  observer
)
export default enchance(Index)
