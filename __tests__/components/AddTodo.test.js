import React from 'react'
import { shallow } from 'enzyme'

describe('Add a new todo', () => {
  it('text should be echoed', () => {
    const wrapper = shallow()

    wrapper.find('input').simulate('change', {
      target: { value: 'hello' }
    })

    expect(wrapper.find('input').props().value).toEqual('hello')
  })

  it('should not accept save empty todo', () => {

  })

  it('should not accept saves a todo with special character', () => {

  })

  it('when the form is submitted the event is cancelled', () => {
    const wrapper = shallow()
    let prevented = false

    wrapper.find('form').simulate('submit', {
      preventDefault: () => {
        prevented = true
      }
    })

    expect(prevented).toBe(true)
  })

  it('should accept save a todo', () => {
    const callbackFn = jest.fn()
    const wrapper = shallow()

    wrapper.find('input').simulate('change', {
      target: { value: 'hello' }
    })
    wrapper.find('form').simulate('submit')

    expect(callbackFn).toHaveBeenCalledWith('hello')
  })

  it('should saves a new todo with "Enter" key', () => {
    const callbackFn = jest.fn()
    const wrapper = shallow()

    wrapper.find('input').simulate('change', {
      target: { value: 'hello' }
    })
    wrapper.find('form').simulate('keypress', { key: 'Enter' }) // OU
    // wrapper.find('form').simulate('keydown', { keyCode: 13 })

    expect(callbackFn).toHaveBeenCalledWith('hello')
  })
})
