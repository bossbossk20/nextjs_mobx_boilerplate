import Enzyme, { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-styled-components'
// import App from '../pages/index.js'

import Input from './../components/Input'
import GoogleMap from './../components/GoogleMap'
import QuickTourButton from './../components/QuickTourButton'
import SearchBox from './../components/SearchBox'
import ToggleButton from './../components/ToggleButton'
import SelectDropdown from './../components/SelectDropdown'
import Button from './../components/Button'

Enzyme.configure({ adapter: new Adapter() })

describe('Components', () => {
  it('Input', () => {
    let tree = renderer.create(<Input />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('Google Map', () => {
    let tree = renderer.create(<GoogleMap />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('QuickTourButton', () => {
    let tree = renderer.create(<QuickTourButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('SearchBox', () => {
    let tree = renderer.create(<SearchBox />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('ToggleButton', () => {
    let tree = renderer.create(<ToggleButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('SelectDropdown', () => {
    let tree = renderer.create(<SelectDropdown />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('Button', () => {
    let tree = renderer.create(<Button />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})


// describe('With Snapshot Testing', () => {
//   it('App shows "Hello world!"', () => {
//     const component = renderer.create(<App />)
//     const tree = component.toJSON()
//     expect(tree).toMatchSnapshot()
//   })
// })