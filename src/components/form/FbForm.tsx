import React from 'react'
import { useFormik, FormikProvider } from 'formik'
import * as Yup from 'yup'
import cn from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { set } from 'src/store/actions'
import styles from './FbForm.module.scss'
import TextField from './TextField'
import { FbState } from '../../store/fbReducer'

const FbForm = () => {
  const values = useSelector((state:FbState) => state.values)
  const dispatch = useDispatch()
  // const refLimit:any = Yup.ref('limit')
  const formikbag = useFormik({
    initialValues: values,
    validationSchema: Yup.object({
      int1: Yup.number().integer().min(1)
        .required(),
      int2: Yup.number().integer().min(1)
        .required(),
      limit: Yup.number().integer().required(),
      string1: Yup.string().required(),
      string2: Yup.string().required(),
    }),
    onSubmit: (newValues) => {
      dispatch(set(newValues))
    },
  })
  const {
    values: {
      int1, int2, limit, string1, string2,
    }, handleSubmit,
  }:any = formikbag
  return (
    <div className={ cn(styles.FbForm) }>
      <FormikProvider value={ formikbag }>
        <TextField name="int1" type="text" value={ int1 } />
        <TextField name="int2" type="text" value={ int2 } />
        <TextField name="limit" type="text" value={ limit } />
        <TextField name="string1" type="text" value={ string1 } />
        <TextField name="string2" type="text" value={ string2 } />
        <button type="submit" onClick={ handleSubmit } className={ cn('cta') }>Submit</button>
      </FormikProvider>
    </div>
  )
}

export default FbForm
