import { getResult, getStats } from './selectors'

test('getResult', () => {
  const state = {
    values: {
      int1: 2,
      int2: 5,
      limit: 10,
      string1: 'fizz',
      string2: 'buzz',
    },
    requests: [],
  }

  expect(getResult(state)).toEqual([ 1, 'fizz', 3, 'fizz', 'buzz', 'fizz', 7, 'fizz', 9, 'fizzbuzz' ])
})


test('getStats', () => {
  const state = {
    values: {},
    requests: [
      {
        int1: 2,
        int2: 5,
        limit: 10,
        string1: 'fizz',
        string2: 'buzz',
      },
      {
        int1: 2,
        int2: 5,
        limit: 10,
        string1: 'fizz',
        string2: 'buzz',
      },
      {
        int1: 3,
        int2: 5,
        limit: 10,
        string1: 'fizzy',
        string2: 'buzzy',
      },
    ],
  }

  expect(getStats(state)).toEqual({
    requestStats: [
      {
        count: 2,
        key: '2-5-10-fizz-buzz',
        perc: 67,
        values: {
          int1: 2,
          int2: 5,
          limit: 10,
          string1: 'fizz',
          string2: 'buzz',
        },
      },
      {
        count: 1,
        key: '3-5-10-fizzy-buzzy',
        perc: 33,
        values: {
          int1: 3,
          int2: 5,
          limit: 10,
          string1: 'fizzy',
          string2: 'buzzy',
        },
      } ],
    totalRequests: 3,
  })
})
