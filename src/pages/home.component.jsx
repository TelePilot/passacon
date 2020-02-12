import React, {useState, useEffect} from 'react'
import HeaderImage from '../components/header-image/header-image.component'
import sanityClient from '../Client'
import styled from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import ClientContainer from '../components/client-logo-container/client-logo-container.component'
import ArticleContainer from '../components/article-container/article-container.component'
import Tjanster from './tjanster.component'
import Konsult from './konsulter.component'
import OmOss from './OmOss.component'
import Roller from './roller.component'
import Erfarenhet from './erfarenhet.component'
import Contact from './contact.component'

const HomeCarousel = styled(Carousel)`
  overflow: hidden;
  height: 100vh;
  width: 100%;
  ul {
    padding: 0;
  }

  .slide iframe {
    margin: 0 !important;
    width: 100% !important;
    min-height: -webkit-fill-available;
  }
  .carousel-slider .control-arrow {
    padding: 20px !important;
  }`
  const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  .carousel.carousel-slider .control-arrow:hover {
    background: none;
  }`

const PageContainer = styled.div`
  width: 100%;
  padding: 0 8%;
  box-sizing: border-box;
`

const Home = ({history}) => {
  console.log(history)
    const [home, setHome] = useState({
        thumbnail: '',
        titel: ''
    })
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
      const settings = {
        autoPlay: true,
        stopOnHover: false,
        interval: 5000,
        showThumbs: false,
        infiniteLoop: true,
        showStatus: false,
        transitionTime: 1000,
      }

    return (
        <HomeContainer id="home">
            {
                home.length > 0 ?
                <HomeCarousel {...settings}>
                    {
                        home.map((homeImage, id) => <HeaderImage key={id} imageDeets={homeImage}/>)
                    }
                </HomeCarousel>
           : null } 
           <PageContainer>
            <ClientContainer/>
            <ArticleContainer content="nyhet" />
            <Tjanster />
            <Roller />
            <Erfarenhet/>
            <Konsult />  
            <OmOss />
            <Contact />
           </PageContainer>
           
              
        </HomeContainer>
    )
}

export default Home
