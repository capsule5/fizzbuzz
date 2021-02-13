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
      <section className={ cn(styles.info) }>
        <div>
          Have a form that accepts five parameters :
          three integers int1, int2 and limit, and two strings str1 and str2.
        </div>
        <div>
          Display a list of strings with numbers from 1 to limit, where: all multiples of int1 are replaced by str1,
          all multiples of int2 are replaced by str2, all multiples of int1 and int2 are replaced by str1str2.
        </div>
        <div>
          Display a statistics view allowing users to know what the most frequent request has been.
          This view should display a graphical representation of the parameters corresponding
          to the most complited form, as well as the number of hits for this form.
        </div>
      </section>
      <section>
        <FbForm />
      </section>
      <section>
        <FbResult />
      </section>
      <section>
        <FbStats />
      </section>
    </div>
  )
}

export default App
