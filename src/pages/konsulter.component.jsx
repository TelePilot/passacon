import React, {useState, useEffect} from 'react'
import sanityClient from '../Client'
import KonsultContainer from '../components/konsult-container/konsult-container.component'
import KonsultSlider from '../components/new-slider.component/new-slider.component'

const Konsulter = () => {
    const [showing, setShowing] = useState({
        opacity: 0,
        pointerEvents: 'none'
    })
    const [slide, setSlide] = useState(0)
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
      console.log(slide)
    return (
        <div>
            <KonsultContainer setSlide={setSlide} click={setShowing} showing={showing} konsulter={konsult} />
            <KonsultSlider slide={slide} click={setShowing} showing={showing} konsulter={konsult} />
        </div>
    )
}

export default Konsulter
