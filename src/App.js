import React from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme.styles'
import Header from './components/header/header.component'

function App() {
  return (
    <ThemeProvider theme={theme}>
       <div className="App">
          <Header/>
        </div>
    </ThemeProvider>
    
  )
}

export default App
