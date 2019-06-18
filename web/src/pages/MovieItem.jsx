import React, { useEffect, useState } from 'react'
import MovieTable from '../components/MovieTable';

const fakeMovieItem = {
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
}

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
]

export default function MovieItem({ match, history }) {
  // eslint-disable-next-line
  const movieId = match.params.id

  const closeModal = e => {
    e.stopPropagation();
    history.push('/');
  }

  const [isOpen, isOpenSet] = useState(false)
  useEffect(() => {
    isOpenSet(true)

    return (() => {
      isOpenSet(false)
    })
  }, [])
  return (
    <article onClick={closeModal}
      style={{ display: 'block', overflowY: 'auto' }}
      className={`modal fade ${isOpen ? 'show' : ''}`} tabIndex="-1" role="dialog">
      <div onClick={e => e.stopPropagation()} className="modal-dialog modal-lg" role="document">
        <div className="modal-content">

          <div className="modal-header">
            <div>
              <h3 className="modal-title title mb-0">
                {fakeMovieItem.title} {
                  fakeMovieItem.year ? `(${fakeMovieItem.year})` : ''} {
                  fakeMovieItem.rating ? `– ${fakeMovieItem.rating}/10` : ''}</h3>
              {fakeMovieItem.genres.length > 0 &&
                <small> {fakeMovieItem.genres.join(', ')}</small>}
            </div>
            <button onClick={closeModal}
              type="button" className="close" aria-label="Close">
              <i className="material-icons">clear</i>
            </button>
          </div>

          <div className="modal-body">

            <section>
              {fakeMovieItem.directors.length > 0 &&
                <p><b>Directors:</b> {fakeMovieItem.directors.join(', ')}</p>}

              {fakeMovieItem.top_3_cast.length > 0 &&
                <p><b>Top 3 cast:</b> {fakeMovieItem.top_3_cast.join(', ')}</p>}

              {fakeMovieItem.synopsis &&
                <p><b>Synopsis:</b> {fakeMovieItem.synopsis}</p>}

              {fakeMovieItem.storyline &&
                <p>{fakeMovieItem.storyline}</p>}
            </section>

            {fakeMovieList.length > 0 &&
              <section>
                <h3>Like this film? Make sure to check out movies below</h3>

                <MovieTable>
                  {fakeMovieList}
                </MovieTable>
              </section>}

          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-info btn-link">
              Sponsor this film
            </button>

            <a className="btn btn-primary"
              target="_blank" rel="noopener noreferrer"
              href={`https://www.imdb.com/title/tt${fakeMovieItem.imdbId}`}>
              View on IMDB</a>

            <button onClick={closeModal}
              type="button" className="btn btn-danger btn-link">
              Close<div className="ripple-container">
                <div className="ripple-decorator ripple-on ripple-out" /></div>
            </button>
          </div>

        </div>
      </div>
    </article>
  )
}
