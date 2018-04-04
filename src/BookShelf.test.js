import React from 'react'
import { shallow, mount } from 'enzyme'
import BookShelf from './BookShelf'

describe('<BookShelf />', () => {
  it('shallow renders correctly', () => {
    expect(shallow(<BookShelf title="" books={[]} onSelect={jest.fn()}/>))
  })

  it('mounts correctly', () => {
    expect(mount(<BookShelf title="" books={[]} onSelect={jest.fn()}/>))
  })

  const books = [{ id: 0 }]
  it('expects to map through an array of books and create a li tag for each of them', () => {
    const wrapper = mount(<BookShelf title="" books={books} onSelect={jest.fn()}/>)
    expect(wrapper.find('li').length).toBe(1)
  })
  //const books = [{ id: 0 }]
  it('expects onSelect to be called when an option is selected', () => {
    const onSelect = jest.fn()
    const wrapper = mount(<BookShelf title="" books={books} onSelect={onSelect} />);
    wrapper.find('select').simulate('change', {target: { value: 'read'}})
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

})
