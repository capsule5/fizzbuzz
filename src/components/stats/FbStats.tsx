import React from 'react'
import cn from 'classnames'
import { getStats } from 'src/store/selectors'
import { useSelector, useDispatch } from 'react-redux'
import { StatType, FbValuesType } from 'src/interfaces'
import { setValues } from 'src/store/actions'
import styles from './FbStats.module.scss'

const Fbstats = () => {
  const { requestStats, totalRequests } = useSelector(getStats)
  const dispatch = useDispatch()

  const handleClick = (values:FbValuesType) => () => {
    dispatch(setValues(values))
  }
  
  if (totalRequests === 0) {
    return null
  }
    
  return (
    <section>
      <div className={ cn(styles.Fbstats) }>
        {requestStats.map(({
          key, count, perc, values, isCurrent,
        }:StatType) => {
          return (
            <div key={ key }>
              <div className={ cn(styles.chart) }>
                <div className={ cn(styles.bar, isCurrent && styles.active) } style={ { width: `${perc}%` } } onClick={ handleClick(values) }>
                  <div className={ cn(styles.key) }>{key}</div>
                </div>
                <div className={ cn(styles.count) }>{count}/{totalRequests}</div>
              </div>
            </div>
          )
        })}
      </div>
      {
        requestStats.length > 1 && (
        <div className={ cn(styles.info) }>
          <i>
            Note : click a bar to get the original request
          </i>
        </div>
        )
      }
    </section>
  )
}

export default Fbstats
