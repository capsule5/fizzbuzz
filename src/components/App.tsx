import React from 'react'
import cn from 'classnames'
import FbForm from './form/FbForm'
import styles from './App.module.scss'
import FbResult from './result/FbResult'
import FbStats from './stats/FbStats'

function App() {
  return (
    <div className={ cn(styles.App) }>
      <header className={ cn(styles.header) }>
        Mappy FizzBuzz
      </header>
      <FbForm />
      <FbStats />
      <FbResult />
    </div>
  )
}

export default App
