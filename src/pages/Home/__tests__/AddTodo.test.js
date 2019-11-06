import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import AddTodo from '../AddTodo'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Add a new todo', () => {
  it('text should be echoed', () => {
    const wrapper = shallow(<AddTodo />)

    wrapper.find('input').simulate('change', {
      target: { value: 'hello' },
    })

    expect(wrapper.find('input').props().value).toEqual('hello')
  })

  it('should not accept save empty todo', () => {})

  it('should not accept saves a todo with special character', () => {})

  it('when the form is submitted the event is cancelled', () => {
    const wrapper = shallow(<AddTodo />)
    let prevented = false

    wrapper.find('form').simulate('submit', {
      preventDefault: () => {
        prevented = true
      },
    })

    expect(prevented).toBe(true)
  })

  it('should accept save a todo', () => {
    const callbackFn = jest.fn()
    const wrapper = shallow(<AddTodo onSubmit={callbackFn} />)

    wrapper.find('input').simulate('change', {
      target: { value: 'hello' },
    })
    wrapper.find('form').simulate('submit')

    expect(callbackFn).toHaveBeenCalledWith('hello')
  })

  it('should saves a new todo with "Enter" key', () => {
    const callbackFn = jest.fn()
    const wrapper = mount(<AddTodo onSubmit={callbackFn} />)

    wrapper.find('input').simulate('change', {
      target: { value: 'hello' },
    })
    // wrapper.find('input[type="text"]').simulate('keypress', { key: 'Enter' }) // OU
    // wrapper.find('input').simulate('keydown', { keyCode: 13 })
    wrapper.find('form').simulate('submit')

    expect(callbackFn).toHaveBeenCalled()
  })
})
