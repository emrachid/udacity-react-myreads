import './__mocks__/localStorage'

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { shallow, mount } from 'enzyme'
import SearchBooks from './SearchBooks'

describe('<SearchBooks />', () => {
  it('shallow renders correctly', () => {
    expect(shallow(<SearchBooks booksOnShelf={[]} onSelect={jest.fn()}/>))
  })

  it('mount renders correctly', () => {
    expect(mount(
      <BrowserRouter>
        <SearchBooks booksOnShelf={[]} onSelect={jest.fn()}/>
      </BrowserRouter>
    ))
  })

})
