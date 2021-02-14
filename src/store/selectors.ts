import { createSelector } from 'reselect'
import { isMultiple } from 'src/utils/math'
import { FbState } from './fbReducer'


export const getResult = createSelector(
  (state:FbState) => state.values,
  ({
    int1, int2, limit, string1, string2,
  }) => {
    const result = []
    if (int1 && int2 && limit) {
      for (let index = 1; index <= limit; index++) {
        if (isMultiple(index, int1) && isMultiple(index, int2)) {
          result.push(`${string1}${string2}`)
        } else if (isMultiple(index, int1)) {
          result.push(string1)
        } else if (isMultiple(index, int2)) {
          result.push(string2)
        } else {
          result.push(index)
        }
      }
    }
    return result
  },
)


export const getStats = createSelector(
  (state:FbState) => state.requests,
  (requests) => {
    const totalRequests = requests.length
    const countByRequest = requests.reduce((acc:any, cur) => {
      const curKey = Object.values(cur).join('-')
      acc[curKey] = acc[curKey] ? acc[curKey] + 1 : 1
      return acc
    }, {})

    const requestStats = Object.entries(countByRequest)
      .map(([ key, count ]:any) => ({
        key,
        count,
        perc: Math.round((count / totalRequests) * 100),
      }))
      .sort((a, b) => {
        return a.count < b.count ? 1 : a.count > b.count ? -1 : 0
      })

    return {
      totalRequests,
      requestStats,
    }
  },
)
