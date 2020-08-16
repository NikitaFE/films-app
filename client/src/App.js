import React, {Component} from "react"
import {films} from "./data"
import {orderBy} from "lodash"

import FilmList from "./components/films"

const AppContext = React.createContext()
export {AppContext}

class App extends Component {
  state = {
    films: [],
  }

  componentDidMount() {
    this.setState({
      films: this.sortFilms(films),
    })
  }

  toggleFeatured = id =>
    this.setState(({films}) => ({
      films: this.sortFilms(
        films.map(film =>
          film._id === id ? {...film, featured: !film.featured} : film,
        ),
      ),
    }))

  sortFilms = films => orderBy(films, ["featured", "title"], ["desc", "asc"])

  render() {
    const {films} = this.state

    return (
      <AppContext.Provider
        value={{
          toggleFeatured: this.toggleFeatured,
        }}
      >
        <div className="ui container mt-3">
          <FilmList films={films} />
        </div>
      </AppContext.Provider>
    )
  }
}

export default App
