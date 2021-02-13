import { FbValuesType } from 'src/interfaces'

export const actions = {
  SET: 'SET',
}

export type Action = { type: string; payload: any };

export const set = (values: FbValuesType): Action => ({
  type: actions.SET,
  payload: values,
})
