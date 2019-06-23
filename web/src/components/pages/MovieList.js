import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filters from '../filters';
import SearchForm from '../SearchForm';
import MovieTable from '../MovieTable';
import useInput from '../../hooks/useInput';
import { getResults } from '../../actions/search';
import {
  resultsSelector,
  boostingFieldsSelector
} from '../../selectors/search';

export default function MovieList() {
  const dispatch = useDispatch();

  const [filtersVisibility, filtersVisibilitySet] = useState(false);
  const toggleFilters = () => filtersVisibilitySet(!filtersVisibility);

  const boostingFields = useSelector(boostingFieldsSelector);
  const results = useSelector(resultsSelector);

  const { value, bind } = useInput('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (value)
      dispatch(
        getResults.request({
          query: value,
          boostingFields
        })
      );
  };

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
                <button className="btn btn-primary" onClick={toggleFilters}>
                  <i className="material-icons">color_lens</i>{' '}
                  {filtersVisibility ? 'Close' : 'Filters'}
                </button>
              </div>
            </div>

            <h2>Movies list</h2>

            <MovieTable>{results}</MovieTable>
          </div>

          {/* filters */}
          <div>
            <Filters isHidden={!filtersVisibility} />
          </div>
        </div>
      </div>
    </main>
  );
}
