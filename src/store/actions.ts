import { FbValuesType } from 'src/interfaces'

export const actions = {
  SET_VALUES: 'SET_VALUES',
  PUSH_REQUEST: 'PUSH_REQUEST',
}

export type Action = { type: string; payload: any };

export const setValues = (values: FbValuesType): Action => ({
  type: actions.SET_VALUES,
  payload: values,
})

export const pushRequest = (values: FbValuesType): Action => ({
  type: actions.PUSH_REQUEST,
  payload: values,
})
