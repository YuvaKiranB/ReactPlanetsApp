// Write your code here
import Slider from 'react-slick'
import GetPlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  }

  return (
    <div className="main">
      <div className="content" data-testid="planets">
        <h1 className="h1">PLANETS</h1>
        <div className="sliderContainer">
          <Slider {...settings}>
            {planetsList.map(eachItem => (
              <GetPlanetItem content={eachItem} key={eachItem.id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default PlanetsSlider
