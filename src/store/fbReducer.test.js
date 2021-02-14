import { actions } from './actions'
import { fbReducer } from './fbReducer'

const initialState = {
  values: {
    int1: undefined,
    int2: undefined,
    limit: undefined,
    string1: '',
    string2: '',
  },
  requests: [],
}

test('SET_VALUES', () => {
  const payload = {
    int1: 1,
    int2: 2,
    limit: 3,
    string1: 'fizz',
    string2: 'buzz',
  }
  const action = { type: actions.SET_VALUES, payload }
  const newState = { ...initialState, values: payload }
  expect(fbReducer(initialState, action)).toEqual(newState)
})
test('PUSH_REQUEST', () => {
  const payload = {
    int1: 1,
    int2: 2,
    limit: 3,
    string1: 'fizz',
    string2: 'buzz',
  }
  const action = { type: actions.PUSH_REQUEST, payload }
  const newState = { ...initialState, requests: [ payload ] }
  expect(fbReducer(initialState, action)).toEqual(newState)
})
