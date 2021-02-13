import { createStore } from 'redux'
import { fbReducer } from './fbReducer'

export const store = createStore(fbReducer)
