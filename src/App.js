import React from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme.styles'
import Header from './components/header/header.component'
import Home from './pages/home.component'
function App() {
  return (
    <ThemeProvider theme={theme}>
       <div className="App">
          <Header/>
          <Home/>
        </div>
    </ThemeProvider>
    
  )
}

export default App
