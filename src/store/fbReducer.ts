import { FbValuesType } from 'src/interfaces'
import { Action, actions } from './actions'

export interface FbState {
  values:FbValuesType
  requests:FbValuesType[]
}

const initialState = {
  values: {
    int1: 7,
    int2: 13,
    limit: 100,
    string1: 'fizz',
    string2: 'buzz',
  },
  requests: [],
}

export const fbReducer = (state:FbState = initialState, action: Action) => {
  switch (action.type) {
    case actions.SET: {
      return {
        ...state,
        values: { ...state.values, ...action.payload },
        requests: [ ...state.requests, action.payload ],
      }
    }
    default:
      return state
  }
}
