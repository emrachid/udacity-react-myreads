import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { shallow, mount } from 'enzyme'
import ListBooks from './ListBooks'

describe('<ListBooks />', () => {
  it('shallow renders correctly', () => {
    expect(shallow(<ListBooks booksOnShelf={[]} onSelect={jest.fn()}/>))
  })

  it('mount renders correctly', () => {
    expect(mount(
      <BrowserRouter>
        <ListBooks booksOnShelf={[]} onSelect={jest.fn()}/>
      </BrowserRouter>
    ))
  })

  it('three shelfs should be rendered', () => {
    const wrapper = shallow(<ListBooks booksOnShelf={[]} onSelect={jest.fn()}/>)
    expect(wrapper.find('BookShelf').length).toBe(3)
  })

})
