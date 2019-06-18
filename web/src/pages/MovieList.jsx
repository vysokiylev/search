import React, { useState } from 'react'
import Filters from '../components/Filters';
import SearchForm from '../components/SearchForm';
import MovieTable from '../components/MovieTable';
import useInput from '../hooks/useInput';

const fakeMovieList = [
  {
    id: 1,
    title: 'Edison Kinetoscopic Record of a Sneeze',
    year: 1894,
    rating: 5.6,
    genres: ['Documentary', 'Short'],
    directors: ['William K.L. Dickson'],
    release_dates: undefined,
    top_3_cast: undefined,
    storyline: "A man (Thomas Edison's assistant) takes a pinch of snuff and sneezes. This is one of the earliest Thomas Edison films and was the first motion picture to be copyrighted in the United States.",
    synopsis: null,
    imdbId: '0000008',
    sponsored: true
  },
  {
    id: 2,
    title: 'Полная кружка пива',
    year: 1892,
    rating: 6.3,
    genres: ['Animation', 'Short'],
    directors: ['Émile Reynaud'],
    release_dates: undefined,
    top_3_cast: undefined,
    storyline: null,
    synopsis: null,
    imdbId: '0000004',
  },
  {
    id: 3,
    title: 'The Toxic Avenger',
    year: 1984,
    rating: 6.3,
    genres: ['Action', 'Comedy', 'Horror'],
    directors: [' Michael Herz', 'Lloyd Kaufman (as Samuel Weil)'],
    release_dates: undefined,
    top_3_cast: [' Andree Maranda', 'Mitch Cohen', 'Jennifer Babtist'],
    storyline: 'Tromaville has a monstrous new hero. The Toxic Avenger is born when meek mop boy Melvin falls into a vat of toxic waste. Now evildoers will have a lot to lose.',
    synopsis: null,
    imdbId: '0090190',
  },
]

export default function MovieList() {

  const [filtersVisibility, filtersVisibilitySet] = useState(false)
  const toggleFilters = () => filtersVisibilitySet(!filtersVisibility)

  const { value, bind } = useInput('')

  const submitHandler = e => {
    e.preventDefault()
  }

  return (
    <main>
      <div className="container">
        <div className="row no-gutters">
          {/* search & table */}
          <div className="col">

            <SearchForm bind={bind} submitHandler={submitHandler} />
            <div className="row no-gutters">
              <p>Description and example of query</p>

              <div className="ml-auto">
                <button className="btn btn-primary"
                  onClick={toggleFilters}
                ><i className="material-icons">color_lens</i> {filtersVisibility ? "Close" : "Filters"}</button>
              </div>
            </div>

            <h2>Movies list</h2>

            <MovieTable>
              {fakeMovieList}
            </MovieTable>

          </div>

          {/* filters */}
          <div>
            <Filters isHidden={!filtersVisibility} />
          </div>
        </div>
      </div>
    </main>
  )
}
