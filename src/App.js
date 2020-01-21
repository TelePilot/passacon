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
const KonsultPage = lazy(() => import('./pages/konsulter.component'))

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
            <Route exact
            path={'/tjanster'} 
            component={TjansterPage}/>
            <Route 
            path={'/artikel/:artikelId'} 
            component={ArticlePage} />
            <Route 
            path={'/roller'}
            component={RollerPage} />
             <Route 
            path={'/konsulter'}
            component={KonsultPage} />
            </Suspense>
          </Switch>
 
          </ThemeProvider>
        </div>
  
    
  )
}

export default App
