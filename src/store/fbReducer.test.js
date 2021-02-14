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

test('SET values', () => {
  const payload1 = {
    int1: 1,
    int2: 2,
    limit: 3,
    string1: 'fizz',
    string2: 'buzz',
  }
  let action = { type: actions.SET, payload: payload1 }
  const newState = { values: payload1, requests: [ payload1 ] }
  expect(fbReducer(initialState, action)).toEqual(newState)
  const payload2 = {
    int1: 4,
    int2: 5,
    limit: 6,
    string1: 'fizz',
    string2: 'buzz',
  }
  action = { type: actions.SET, payload: payload2 }
  expect(fbReducer(newState, action)).toEqual({ values: payload2, requests: [ payload1, payload2 ] })
})
