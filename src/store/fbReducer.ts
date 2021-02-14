import { FbValuesType } from 'src/interfaces'
import { Action, actions } from './actions'

export interface FbState {
  values:FbValuesType
  requests:FbValuesType[]
}

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

export const fbReducer = (state:FbState = initialState, action: Action) => {
  switch (action.type) {
    case actions.SET_VALUES: {
      return {
        ...state,
        values: { ...state.values, ...action.payload },
      }
    }
    case actions.PUSH_REQUEST: {
      return {
        ...state,
        requests: [ ...state.requests, action.payload ],
      }
    }
    default:
      return state
  }
}
