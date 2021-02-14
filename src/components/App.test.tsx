import React from 'react'
import { render, screen } from '@testing-library/react'
import TestProvider from 'src/helpers/TestProvider'
import App from './App'

test('App renders', () => {
  render(
    <TestProvider>
      <App />
    </TestProvider>,
  )
  expect(screen.getByText(/Mappy FizzBuzz/i)).toBeInTheDocument()
})
