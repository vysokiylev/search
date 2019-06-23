import {
  getResults,
  addBoostingField,
  removeBoostingField,
  resetBoostingFields
} from '../actions/search';

const initialState = {
  results: [],
  boostingFields: []
};

export default function SearchReducer(state = initialState, action) {
  let boostingFields;
  switch (action.type) {
    case getResults.SUCCESS:
      return {
        ...state,
        results: action.payload
      };
    case addBoostingField.REQUEST:
      boostingFields = state.boostingFields.slice();
      if (!boostingFields.includes(action.payload))
        boostingFields.push(action.payload);
      return {
        ...state,
        boostingFields
      };
    case removeBoostingField.REQUEST:
      boostingFields = state.boostingFields
        .slice()
        .filter((field) => field !== action.payload);
      return {
        ...state,
        boostingFields
      };
    case resetBoostingFields.REQUEST:
      return {
        ...state,
        boostingFields: []
      };
    default:
      return state;
  }
}
