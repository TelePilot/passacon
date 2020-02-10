import React, { lazy, Suspense } from 'react'
import { Route, Switch} from 'react-router-dom'
import './App.css'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme.styles'
import Header from './components/header/header.component'

const HomePage = lazy(() => import('./pages/home.component'))
const ArticlePage = lazy(() => import('./pages/article.component'))
const ErfarenhetPage = lazy(() => import('./components/erfarenhet-extended/erfarenhet-extended.component'))

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
            path={'/artikel/:artikelId'} 
            component={ArticlePage} />
            <Route
            path={'/erfarenhet/:artikelId'} 
            component={ErfarenhetPage} />
            </Suspense>
          </Switch>
 
         
          
          </ThemeProvider>
        </div>
  
    
  )
}

export default App
