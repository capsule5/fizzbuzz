import React from 'react'
import cn from 'classnames'
import FbForm from './form/FbForm'
import styles from './App.module.scss'

function App() {
  return (
    <div className={ cn(styles.App) }>
      <header className={ cn(styles.header) }>
        Mappy FizzBuzz
      </header>
      <section>
        <FbForm />
      </section>
    </div>
  )
}

export default App
