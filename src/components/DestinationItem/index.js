import './index.css'

const DestinationItem = props => {
  const {placeList} = props
  const {name, imgUrl} = placeList

  return (
    <li className="place-card">
      <img src={imgUrl} className="image" alt={name} />
      <p className="place">{name}</p>
    </li>
  )
}

export default DestinationItem
