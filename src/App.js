import React, { lazy, Suspense, useState, useEffect} from 'react'
import { Route, Switch, Link} from 'react-router-dom'
import './App.css'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme.styles'
import Header from './components/header/header.component'
import Footer from './components/footer/footer-component'

import sanityClient from './Client'
import styled from 'styled-components'
import CookieConsent from 'react-cookie-consent'
import ReactGA from 'react-ga'

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
  const [home, setHome] = useState({
    thumbnail: '',
    titel: ''
}) 
  const [cookie, cookieTrigger] = useState(false)
useEffect(() => {
  if(cookie) {
    ReactGA.initialize('UA-159437523-1')
    window.localStorage.setItem('cookieAccepted', true)
    ReactGA.pageview(window.location.pathname + window.location.search) 
    
  }
 
}, [cookie])
useEffect(() => {
  window.localStorage.cookieAccepted ? cookieTrigger(true) : cookieTrigger(false)
},[])

useEffect(() => {
 
    const homeQuery = `*[_type == "artikel" && slider] | order(datum desc) {
        thumbnail, titel
    }`

    sanityClient.fetch(homeQuery).then(home => {
        const homeArray = []
      home.forEach(home=> {
          homeArray.push(home)
      })
      setHome(homeArray)
    })
  
   return
  }, [])
  const [contact, setContact] = useState('')
    useEffect(() => {
        const contactQuery = `*[_type == "kontakt"]`
 
        sanityClient.fetch(contactQuery).then(contact => { 
         contact.forEach(contact => {
             setContact(contact)
         })
       })
    }, [])
    const [tjanster, setTjanster] = useState([])
    useEffect(() => {
        const articleQuery = `*[_type == "artikel" && tjanster] | order(datum desc)
        {
            thumbnail, titel
        }`
        const articleArray = []

        sanityClient.fetch(articleQuery).then(article => {
            
          article.forEach(article => {
        
              articleArray.push(article)
          })
          setTjanster(articleArray)
        })
        return }, [])
        const [roller, setRoller] = useState({
          roller: []
        })
        useEffect(() => {
            const rollQuery = `*[_type == "roller"]`
    
            sanityClient.fetch(rollQuery).then(roller => {
              roller.forEach(roll => {
                setRoller(roll)
              })
            })
            return
          }, [])

    const [omOss, setOmOss] = useState('')
    useEffect(() => {
        const omOssQuery = `*[_type == "omOss"]`
 
        sanityClient.fetch(omOssQuery).then(omOss => { 
         omOss.forEach(omOss => {
             setOmOss(omOss)
         })
       })
    }, [])
    const [nyheter, setNyheter] = useState([])
 
    useEffect(() => {
       
        const articleQuery = `*[_type == "artikel" && nyhet] | order(datum desc)
        {
            thumbnail, titel
        }`
        const articleArray = []

        sanityClient.fetch(articleQuery).then(article => {
            
          article.forEach(article => {
              articleArray.push(article)
          })
          setNyheter(articleArray)
        })
        return 
      }, [])
      const [erfarenhet, setErfarenhet] = useState([])

    useEffect(() => {
        const articleQuery = `*[_type == "erfarenhet"] | order(datum desc)
        {
            thumbnail, titel
        }`
        const articleArray = []

        sanityClient.fetch(articleQuery).then(article => {
            
          article.forEach(article => {
              articleArray.push(article)
          })
          setErfarenhet(articleArray)
        })
        return
      }, [])
      const [konsult, setKonsult] = useState([])
      useEffect(() => {
          const konsultQuery = `*[_type == "konsult"] | order(namn asc)`
          const konsultArray = []
          sanityClient.fetch(konsultQuery).then(konsult => {
              
            konsult.forEach(konsult => {
                konsultArray.push(konsult)
            })
            setKonsult(konsultArray)
          })
          return
        }, [])
        const Fallback = styled.div`
        display: flex;
        height: 100vh;
        width: 100%;
        justify-content: center;
        align-items: center;
        `
  return (
    
       <div className="App">
         <CookieConsent 
         enableDeclineButton
         buttonText={'Acceptera'}
         declineButtonText={'Nej Tack'}
         onAccept={() => cookieTrigger(true)}
         style={{background: '#1E3D78'}}
         buttonStyle={{padding: '5px'}}
         > 
          Den här webbplatsen använder cookies, som samlar information om hur du interagerar med sidan. Genom att acceptera tillåter du att vi samlar och behandlar dina personuppgifter enligt vår <Link style={{color: 'white'}} to="./integritets-policy">
          integritetspolicy
      </Link>
         
         
         </CookieConsent>
         <ThemeProvider theme={theme}>
          <Header/>
          
          
            <Suspense fallback={<Fallback><p></p></Fallback>}>
             
              <Switch>
            <Route 
            path={'/'}
           
            exact
            >
              <HomePage erfarenhet={erfarenhet} home={home} tjanster={tjanster} nyheter={nyheter} omOss={omOss} contact={contact} konsult={konsult} roller={roller} />
            </Route>
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
                 </Switch>
            </Suspense>
      
 
          <Footer/>
          
          </ThemeProvider>
        </div>
  
    
  )
}

export default App
