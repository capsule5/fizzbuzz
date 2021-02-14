import { createSelector } from 'reselect'
import { createCachedSelector } from 're-reselect'
import { isMultiple } from 'src/utils/math'
import { FbState } from './fbReducer'

export const getResult = createCachedSelector(
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
)((state) => JSON.stringify(state.values))


export const getStats = createSelector(
  (state:FbState) => state.requests,
  (requests) => {
    const totalRequests = requests.length
    const countByRequest = requests.reduce((acc:any, cur) => {
      const curKey = Object.values(cur).join('-')
      if (acc[curKey]) {
        acc[curKey].count = acc[curKey].count + 1
      } else {
        acc[curKey] = {
          count: 1,
          values: cur,
        }
      }
      return acc
    }, {})

    const requestStats = Object.entries(countByRequest)
      .map(([ key, { count, values } ]:any) => ({
        key,
        values,
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
