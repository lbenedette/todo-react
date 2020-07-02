import React from 'react'
import { shallow } from 'enzyme'
import TodoList from './TodoList'
import Todo from '../Todo/Todo'

describe('<TodoList />', () => {
  const mockToggle = jest.fn()
  const props = {
    todos: [{
      id: 1,
      text: 'Todo',
      completed: false
    }],
    toggleTodo: mockToggle
  }

  it('should show todos and call function on click', () => {
    const wrapper = shallow(<TodoList {...props} />)
    const todo = wrapper.find(Todo)

    todo.simulate('click')

    expect(todo).toHaveLength(1)
    expect(mockToggle).toHaveBeenCalled()
  })
})