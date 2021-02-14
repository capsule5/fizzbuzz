/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useField } from 'formik'
import cn from 'classnames'
import styles from './TextField.module.scss'

interface Props{
  name:string
  type:string
  value:string
  placeholder?:string
}

const TextField: React.FC<Props> = (props) => {
  const { name } = props
  const [ field, meta ] = useField(props)
  return (
    <div className={ cn(styles.group) }>
      <div className={ cn(styles.line) }>
        <label htmlFor={ name }>{name}</label>
        <input { ...field } { ...props } />
      </div>
      {meta.touched && meta.error ? (
        <div className={ styles.error }>{meta.error}</div>
      ) : null}
    </div>
  )
}

export default TextField
