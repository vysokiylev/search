import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MovieTable({ children }) {
  return (
    <table className="movies-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Rating</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {children.map((movie, index) => (
          <tr key={index}>
            <td>
              <Link
                to={{
                  pathname: `/movie/${movie.id}`,
                  state: { modal: true }
                }}>
                {movie.title}{' '}
                {movie.sponsored && (
                  <span className="badge badge-info">Sponsored</span>
                )}
              </Link>
            </td>
            <td>{movie.year}</td>
            <td>{movie.rating}/10</td>
            <td>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.imdb.com/title/tt${movie.imdbId}`}>
                IMDB{' '}
                <i
                  style={{ fontSize: '10px', verticalAlign: 'top' }}
                  className="material-icons"
                >
                  open_in_new
                </i>
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

MovieTable.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      year: PropTypes.number,
      rating: PropTypes.number,
      genres: PropTypes.arrayOf(PropTypes.string),
      directors: PropTypes.arrayOf(PropTypes.string),
      release_dates: PropTypes.arrayOf(PropTypes.string),
      top_3_cast: PropTypes.arrayOf(PropTypes.string),
      storyline: PropTypes.string,
      synopsis: PropTypes.string,
      imdbId: PropTypes.string,
      sponsored: PropTypes.bool
    })
  ).isRequired
};

export default MovieTable;
