import React from 'react'
import cn from 'classnames'
import { getStats } from 'src/store/selectors'
import { useSelector } from 'react-redux'
import { StatType } from 'src/interfaces'
import styles from './FbStats.module.scss'

const Fbstats = () => {
  const { requestStats, totalRequests } = useSelector(getStats)
  return (
    <div className={ cn(styles.Fbstats) }>
      {requestStats.map(({ key, count, perc }:StatType) => {
        return (
          <div key={ key }>
            <div className={ cn(styles.chart) }>
              <div className={ cn(styles.bar) } style={ { width: `${perc}%` } }>
                <div className={ cn(styles.key) }>{key}</div>
              </div>
              <div className={ cn(styles.count) }>{count}/{totalRequests}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Fbstats
