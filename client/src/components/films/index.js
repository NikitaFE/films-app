import React from "react"
import PropTypes from "prop-types"

import FilmCard from "./FilmCard"
import Message from "../Message"

export default function FilmList({films}) {
  return (
    <div className="ui four cards">
      {!films.length ? (
        <Message msg="No films yet in our database" type="star outline" />
      ) : (
        films.map(film => <FilmCard key={film._id} film={film} />)
      )}
    </div>
  )
}

FilmList.prorTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
}

FilmList.defaultProps = {
  films: [],
}
