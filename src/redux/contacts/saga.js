import { all, takeEvery, fork } from 'redux-saga/effects';
import actions from './actions';

export function* updateContacts() {
  yield takeEvery(actions.UPDATE_CONATCTS, function*() {});
}

export default function* rootSaga() {
  yield all([fork(updateContacts)]);
}
