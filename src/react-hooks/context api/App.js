import React from 'react'
import Container from './components/Container'
import {ThemeProvider} from './context/ThemeContext'
import "./App.css"

const App = () => {
  return (
    <ThemeProvider>
      <Container />
    </ThemeProvider>
  )
}

export default App