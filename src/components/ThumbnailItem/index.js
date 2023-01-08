import './index.css'

const ThumbnailItem = props => {
  const {thumbnailUrl, category} = props

  return (
    <li>
      <button type="button" className="thumbnail-btn">
        <img src={thumbnailUrl} alt={category} className="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
