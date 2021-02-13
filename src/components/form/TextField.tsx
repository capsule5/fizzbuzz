/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useField } from 'formik'
import cn from 'classnames'
import styles from './TextField.module.scss'

interface Props{
  name:string
  type:string
  value:string
}

const TextField: React.FC<Props> = ({ name, type, value }) => {
  const [ field, meta ] = useField({ name, type, value })
  return (
    <div className={ cn(styles.group) }>
      <div className={ cn(styles.line) }>
        <label htmlFor={ name }>{name}</label>
        <input { ...field } />
      </div>
      {meta.touched && meta.error ? (
        <div className={ styles.error }>{meta.error}</div>
      ) : null}
    </div>
  )
}

export default TextField
