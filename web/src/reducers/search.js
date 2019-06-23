import { getResults } from '../actions/search';

const initialState = {
  results: []
};

export default function SearchReducer(state = initialState, action) {
  switch (action.type) {
    case getResults.SUCCESS:
      return {
        ...state,
        results: action.payload
      };
    default:
      return state;
  }
}
