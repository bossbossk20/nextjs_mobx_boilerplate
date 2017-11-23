import React from 'react'
import styled from 'styled-components'
import theme from './../theme'

const SearchBoxStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  .searchBoxContainer {
    position: relative;
    display: flex;
    padding:0 0 0 20px;
    margin:0 12px;
    border: 1px solid ${theme().color.darkGray};
    background: ${theme().color.lightBlack};
    /* direction: rtl; */
    height: 34px;
    width: 300px;
    .sendicon-icon-search {
      font-size: 20px;
      position:absolute;
      bottom:0px;
      top:0px;
      left:0px;
      background-color: ${theme().color.lightBlack};
      padding-top: 5px;
      padding-left: 5px;
    }
    .textField {
      color: #FFF;
      border: 0px;
      margin:0;
      padding-right: 30px;
      width: 100%;
      background-color: ${theme().color.lightBlack};
      margin-left: 10px;
    }
    .textField:focus {
        outline: none;
    }
  }
`

const SearchBox = () => (
  <SearchBoxStyle>
    <div className='searchBoxContainer'>
      <input className='textField' placeholder='Search' />
      <i className='sendicon-icon-search' />
    </div>
  </SearchBoxStyle>
)

export default SearchBox
