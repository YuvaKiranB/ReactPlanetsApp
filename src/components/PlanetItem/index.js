// Write your code here
import './index.css'

const GetPlanetItem = props => {
  const {content} = props
  const {name, imageUrl, description} = content

  return (
    <div className="planetContainer">
      <img className="planetImage" src={imageUrl} alt={`planet ${name}`} />
      <h1 className="planetHeading">{name}</h1>
      <p className="planetPara">{description}</p>
    </div>
  )
}

export default GetPlanetItem
