import { isMultiple } from './math'

test('isMultiple', () => {
  expect(isMultiple(6, 3)).toBeTruthy()
  expect(isMultiple(10, 3)).toBeFalsy()
})
