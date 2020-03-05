import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import ListApplicationSagas from './ListApplications/sagas';
import ViewApplicationSagas from './ViewApplication/sagas';

export default function* rootSaga(getState) {
  yield all([
      authSagas(),
      ListApplicationSagas(),
      ViewApplicationSagas()
  ]);
}
