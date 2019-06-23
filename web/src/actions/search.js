import { createAction } from 'redux-saga-actions';

export const getResults = createAction('GET_RESULTS');
export const addBoostingField = createAction('ADD_BOOSTING_FIELD');
export const removeBoostingField = createAction('REMOVE_BOOSTING_FIELD');