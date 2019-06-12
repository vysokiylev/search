import { call, spawn } from 'redux-saga/effects';

export default function*() {
  yield [
    // здесь будут саги
  ].map((saga) =>
    spawn(function*() {
      while (true)
        try {
          yield call(saga);
        } catch (error) {
          console.error(error);
        }
    })
  );
}
