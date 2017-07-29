import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import { conditionalAllFields } from '../../app/exampleSchema'
import { DForm } from '../dform'


describe('DForm', () => {
  const getComponent = (args = {}) => (
    <DForm
        initialState={args.initialState}
        keyExtractor={args.keyExtractor || (field => field.label)}
        onChange={args.onChange || jest.fn()}
        schema={args.schema || conditionalAllFields}
    />
  )

  it('calls onChange on mount with default value of the single visible field', () => {
    const args = {
      onChange: jest.fn(),
    }
    const render = renderer.create(getComponent(args))
    expect(args.onChange).toHaveBeenCalledWith({
      'Example boolean': false,
    })
  })

  it('calls onChange on mount with default values if initialState is given', () => {
    const args = {
      initialState: {
        'Example boolean': true,
      },
      onChange: jest.fn(),
    }
    const render = renderer.create(getComponent(args))
    expect(args.onChange).toHaveBeenCalledWith({
      'Example boolean': true,
      'Example string': '',
    })
  })

  it('calls onChange twice on mount with default values if initialState is given', () => {
    let state
    const args = {
      onChange: jest.fn(newState => state = newState),
    }
    const wrapper = shallow(getComponent(args))

    const _boolean = wrapper.find('[testID="Example boolean"]').first()
    _boolean.props().onCheckedChange({checked: true})

    expect(state).toEqual({
      'Example boolean': true,
      'Example string': '',
    })
  })

  it('calls onChange with only active fields', () => {
    let state
    const args = {
      initialState: {
        'Example boolean': true,
        'Example string': '',
      },
      onChange: jest.fn(newState => state = newState),
    }
    const wrapper = shallow(getComponent(args))

    expect(state).toEqual({
      'Example boolean': true,
      'Example string': '',
    })

    const _boolean = wrapper.find('[testID="Example boolean"]').first()
    _boolean.props().onCheckedChange({checked: false})

    expect(state).toEqual({
      'Example boolean': false,
    })
  })

})
