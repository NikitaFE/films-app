import React, {useState} from "react"
import PropTypes from "prop-types"

import Featured from "./Featured"

const FilmCard = ({film}) => {
  const [isShowDescription, setShowDescription] = useState(false)

  return (
    <div className="ui card">
      {isShowDescription ? (
        <div className="content">
          <p>{film?.description}</p>
        </div>
      ) : (
        <div className="image">
          <span className="ui green label ribbon">$ {film?.price} </span>
          <Featured featured={film?.featured} id={film?._id} />
          <img src={film?.img} alt={film?.title} />
        </div>
      )}

      <div className="content">
        <span href="#" className="header">
          {film?.title}
        </span>
        <div className="meta">
          <i className="icon users" /> {film?.director}
          <span className="right floated">
            <i className="icon wait right" /> {film?.duration} min
          </span>
        </div>
        <div className="content">
          <i
            className={`icon link eye${isShowDescription ? " slash" : ""}`}
            onClick={() => setShowDescription(!isShowDescription)}
          />
        </div>
      </div>
    </div>
  )
}

FilmCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    featured: PropTypes.bool.isRequired,
  }),
}

export default React.memo(FilmCard)
