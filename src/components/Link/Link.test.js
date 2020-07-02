import React from 'react'
import { mount, shallow } from 'enzyme'
import Link from './Link'

describe('<Link />', () => {
  const mockFn = jest.fn();
  const props = {
    active: true,
    children: 'Button',
    onClick: mockFn
  }

  it('should not call onClick when is active', () => {
    const wrapper = mount(<Link {...props} />)
    const button = wrapper.find('button')

    button.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(0)
  })

  it('should call onClick when is not active', () => {
    const wrapper = mount(<Link {...props} active={false}/>)
    const button = wrapper.find('button')

    button.simulate('click')
    expect(mockFn).toHaveBeenCalled()
  })

  it('should show button text', () => {
    const wrapper = shallow(<Link {...props} />)
    expect(wrapper.find('button').text()).toEqual("Button")
  })
})