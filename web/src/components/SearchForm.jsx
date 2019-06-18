import React from 'react'
import PropTypes from 'prop-types'

function SearchForm(props) {
  return (
    <form onSubmit={props.submitHandler} className="row align-items-center no-gutters">
      <div className="col">
        <div className="form-group has-default">
          <input {...props.bind} type="text" className="form-control"
            placeholder="Type query here..." />
        </div>
      </div>
      <button type="submit" className="btn btn-primary ml-5">
        <i className="material-icons">search</i> Search
      </button>
    </form>
  )
}

SearchForm.propTypes = {
  submitHandler: PropTypes.func,
  bind: PropTypes.object
}

export default SearchForm

