import React from 'react'
import { shallow } from 'enzyme'
import Todo from './Todo'

describe('<Todo />', () => {
  const props = {
    text: '',
    completed: false,
    onClick: jest.fn()
  }

  it('should show text', () => {
    const wrapper = shallow(<Todo {...props} text='Todo' />)
    const item = wrapper.find('.todo__item')
    expect(item.text()).toEqual('Todo')
  })

  it('should have text decoration none when incompleted', () => {
    const wrapper = shallow(<Todo {...props} />)
    const item = wrapper.find('.todo__item')
    expect(item.props().style).toEqual({ textDecoration: 'none' })
  })

  it('should have text decoration line-throught when completed', () => {
    const wrapper = shallow(<Todo {...props} completed={true} />)
    const item = wrapper.find('.todo__item')
    expect(item.props().style).toEqual({ textDecoration: 'line-through' })
  })
})