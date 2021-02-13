import React from 'react'
import { useFormik, FormikProvider } from 'formik'
import * as Yup from 'yup'
import cn from 'classnames'
import styles from './FbForm.module.scss'
import TextField from './TextField'

const FbForm = () => {
  const refLimit:any = Yup.ref('limit')
  const formikbag = useFormik({
    initialValues: {
      int1: 2,
      int2: 5,
      limit: 16,
      string1: 'fizz',
      string2: 'buzz',
    },
    validationSchema: Yup.object({
      int1: Yup.number().integer().min(1).required(),
      int2: Yup.number().integer().lessThan(refLimit).required(),
      limit: Yup.number().integer().required(),
      string1: Yup.string().required(),
      string2: Yup.string().required(),
    }),
    onSubmit: ({ int1, int2, limit }) => {
      console.log({ int1, int2, limit })
    },
  })
  const { values, handleSubmit }:any = formikbag
  return (
    <div className={ cn(styles.FbForm) }>
      <FormikProvider value={ formikbag }>
        <TextField name="int1" type="text" value={ values.int1 } />
        <TextField name="int2" type="text" value={ values.int2 } />
        <TextField name="limit" type="text" value={ values.limit } />
        <TextField name="string1" type="text" value={ values.string1 } />
        <TextField name="string2" type="text" value={ values.string2 } />
        <button type="submit" onClick={ handleSubmit } className={ cn('cta') }>Submit</button>
      </FormikProvider>
    </div>
  )
}

export default FbForm
