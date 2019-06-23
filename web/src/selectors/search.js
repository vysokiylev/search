import { createSelector } from 'reselect';

export const searchStateSelector = (state) => state.search;
export const resultsSelector = (state) => searchStateSelector(state).results;

export const movieSelector = (movieId) =>
  createSelector(
    resultsSelector,
    (results) => results.find((movie) => movie.id === movieId)
  );
