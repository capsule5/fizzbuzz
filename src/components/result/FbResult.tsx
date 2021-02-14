import React from 'react'
import cn from 'classnames'
import { useSelector } from 'react-redux'
import { getResult } from 'src/store/selectors'
import styles from './FbResult.module.scss'

const FbResult = () => {
  const result = useSelector(getResult)
  // console.log(getResult.cache)
  
  return result.length && (
    <section>
      <div className={ cn(styles.FbResult) }>
        {result.map((r:string, index:number) => {
          return <span key={ `${r}${index}` }>{r} </span>
        })}
      </div>
    </section>
  )
}

export default FbResult
