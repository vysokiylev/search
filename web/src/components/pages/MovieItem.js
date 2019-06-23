import React, { useEffect, useState } from 'react';
import MovieTable from '../MovieTable';
import { useSelector } from 'react-redux';
import { resultsSelector, movieSelector } from '../../selectors/search';

const fakeMovieItem = {
  id: 3,
  title: 'The Toxic Avenger',
  year: 1984,
  rating: 6.3,
  genres: ['Action', 'Comedy', 'Horror'],
  directors: [' Michael Herz', 'Lloyd Kaufman (as Samuel Weil)'],
  release_dates: undefined,
  top_3_cast: [' Andree Maranda', 'Mitch Cohen', 'Jennifer Babtist'],
  storyline:
    'Tromaville has a monstrous new hero. The Toxic Avenger is born when meek mop boy Melvin falls into a vat of toxic waste. Now evildoers will have a lot to lose.',
  synopsis: null,
  imdbId: '0090190'
};


export default function MovieItem({ match, history }) {
  // eslint-disable-next-line
  const movieId = match.params.id;

  const movie = useSelector(movieSelector(movieId));

  console.log(movie);

  const closeModal = (e) => {
    e.stopPropagation();
    history.push('/');
  };

  const results = useSelector(resultsSelector);
  const [isOpen, isOpenSet] = useState(false);
  useEffect(() => {
    isOpenSet(true);

    return () => {
      isOpenSet(false);
    };
  }, []);
  return (
    <article
      onClick={closeModal}
      style={{ display: 'block', overflowY: 'auto' }}
      className={`modal fade ${isOpen ? 'show' : ''}`}
      tabIndex="-1"
      role="dialog">
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-dialog modal-lg"
        role="document">
        <div className="modal-content">
          <div className="modal-header">
            <div>
              <h3 className="modal-title title mb-0">
                {movie.title}{' '}
                {movie.year ? `(${movie.year})` : ''}{' '}
                {movie.rating ? `– ${movie.rating}/10` : ''}
              </h3>
              {movie.genres.length && (
                <small> {movie.genres.join(', ')}</small>
              )}
            </div>
            <button
              onClick={closeModal}
              type="button"
              className="close"
              aria-label="Close">
              <i className="material-icons">clear</i>
            </button>
          </div>

          <div className="modal-body">
            <section>
              {movie.directors.length && (
                <p>
                  <b>Directors:</b> {movie.directors.join(', ')}
                </p>
              )}

              {movie.top3Cast.length && (
                <p>
                  <b>Top 3 cast:</b> {movie.top3Cast.join(', ')}
                </p>
              )}

              {movie.synopsis && (
                <p>
                  <b>Synopsis:</b> {movie.synopsis}
                </p>
              )}

              {movie.storyline && <p>{movie.storyline}</p>}
            </section>

            {results.length > 0 && (
              <section>
                <h3>Like this film? Make sure to check out movies below</h3>

                <MovieTable>{results}</MovieTable>
              </section>
            )}
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-info btn-link">
              Sponsor this film
            </button>

            <a
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.imdb.com/title/tt${movie.imdbId}`}>
              View on IMDB
            </a>

            <button
              onClick={closeModal}
              type="button"
              className="btn btn-danger btn-link">
              Close
              <div className="ripple-container">
                <div className="ripple-decorator ripple-on ripple-out" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
