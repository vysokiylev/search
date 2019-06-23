import { put, takeEvery } from 'redux-saga/effects';
import { getResults } from '../actions/search';
import API from '../API';

function* search({ payload }) {
  const data = yield API.search(payload);
  yield put(getResults.success(data));
}

export default function*() {
  yield takeEvery(getResults.REQUEST, search);
}
