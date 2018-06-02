import React from 'react';
import {shallow, mount} from 'enzyme';

import TodoListContainer from './TodoListContainer'
import TodoItem from './TodoItem'

const mockTodos= ["Learn Jest", "Get a Job"]

describe('TodoListContainer Component', () => {
  const shallowWrap = shallow(<TodoListContainer />);
  const mounted = mount(<TodoListContainer />)

  test('it has a text input field', () => {
    expect(shallowWrap.find('input[type="text"]').length).toBe(1);
  })

  test('it has a submit button', () => {
    expect(shallowWrap.find('.inputSubmit').length).toBe(1);
  });

  test('it starts out with no todos', () => {
    expect(shallowWrap.state('todos').length).toBe(0)
  })

  test('it can have todos in state', () => {
     mounted.setState({ todos: mockTodos })
     expect(mounted.state('todos').length).toBe(2)
  })

  it('it can render TodoItem in TodoListContainer component', () => {
    mounted.setState({ todos: mockTodos })
    expect(mounted.find(TodoItem).length).toBe(2)
  })
})
