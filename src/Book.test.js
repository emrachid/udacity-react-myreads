import React from 'react'
import { shallow } from 'enzyme'
import Book from './Book'

describe('<Book />', () => {
  it('shallow renders correctly', () => {
    expect(shallow(<Book data={{}} onSelect={jest.fn()} />))
  })

  it('renders five <option /> components', () => {
    const wrapper = shallow(<Book data={{}} onSelect={jest.fn()} />);
    expect(wrapper.find('option').length).toBe(5);
  });

  it('expects onSelect to be called when an option is selected', () => {
    const onSelect = jest.fn()
    const wrapper = shallow(<Book data={{}} onSelect={onSelect} />);
    wrapper.find('select').simulate('change', {target: { value: 'read'}})
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

})
