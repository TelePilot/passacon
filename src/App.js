import React, { lazy, Suspense } from 'react'
import { Route, Switch} from 'react-router-dom'
import './App.css'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme.styles'
import Header from './components/header/header.component'
import Footer from './components/footer/footer-component'
import ScrollToTop from './scrollToTop'

const HomePage = lazy(() => import('./pages/home.component'))
const ArticlePage = lazy(() => import('./pages/article.component'))
const ErfarenhetPage = lazy(() => import('./components/erfarenhet-extended/erfarenhet-extended.component'))
const KonsultPage = lazy(() => import('./components/konsult-extended-phone/konsult-extended-phone.component'))
const Terms = lazy(() => import('./pages/terms.component'))
const Marknadsforing = lazy(() => import('./pages/marknadsforing.component'))
const Forsaljning = lazy(() => import('./pages/forsaljning.component'))
const Hantering = lazy(() => import('./pages/hantering.component'))
const Leverans = lazy(() => import('./pages/leverans.component'))
const Mails = lazy(() => import('./pages/mails.component'))
const Partners = lazy(() => import('./pages/partners.component'))
const Kontakter = lazy(() => import('./pages/kontakter.component'))

function App() {
  return (
       <div className="App">
         <ScrollToTop/>
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
            <Route
            path={'/konsult/:artikelId'} 
            component={KonsultPage} />
            <Route
            path={'/integritets-policy'}
            component={Terms}
             />
             <Route
            path={'/marknadsforing'}
            component={Marknadsforing}
             />
             <Route
            path={'/forsaljning'}
            component={Forsaljning}
             />
             <Route
            path={'/leverans'}
            component={Leverans}
             />
             <Route
            path={'/hantering-bokforing-skatter'}
            component={Hantering}
             />
             <Route
            path={'/partners'}
            component={Partners}
             />
             <Route
            path={'/mejl-dokumenthanteringspolicy'}
            component={Mails}
             />
             <Route
            path={'/kontakt-tredje-land'}
            component={Kontakter}
             />
            </Suspense>
          </Switch>
 
          <Footer/>
          
          </ThemeProvider>
        </div>
  
    
  )
}

export default App
