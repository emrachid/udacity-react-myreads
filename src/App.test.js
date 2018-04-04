import './__mocks__/localStorage'

import React from 'react'
import { shallow, mount } from 'enzyme'
import App from './App'
/**
 This course is not designed to teach Test Driven Development.
 Feel free to use this file to test your application, but it
 is not required.
**/

describe('<App />', () => {
//  global.localStorage.token = Math.random().toString(36).substr(-8);
  it('shallow renders without crashing', () => {
    expect(shallow(<App />))
  })

  it('mount renders without crashing', () => {
    expect(mount(<App />))
  })
})
