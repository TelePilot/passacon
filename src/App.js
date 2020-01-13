import React, { lazy, Suspense } from 'react'
import { Route, Switch} from 'react-router-dom'
import './App.css'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme.styles'
import Header from './components/header/header.component'

const HomePage = lazy(() => import('./pages/home.component'))
const TjansterPage = lazy(() => import('./pages/tjanster.component'))
const ArticlePage = lazy(() => import('./pages/article.component'))
const RollerPage = lazy(() => import('./pages/roller.component'))

function App() {
  return (
    
       <div className="App">
         <ThemeProvider theme={theme}>
          <Header/>
          <Switch>
            <Suspense fallback={<p>Loading</p>}>
            <Route
            path={'/'}
            component={HomePage}
            exact
            />
            <Route
            path={'/tjanster'} 
            component={TjansterPage}/>
            <Route 
            path={'/artikel/:artikelId'} 
            component={ArticlePage} />
            <Route 
            path={'/roller'}
            component={RollerPage} />
            </Suspense>
          </Switch>
 
          </ThemeProvider>
        </div>
  
    
  )
}

export default App
