import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import contactSagas from './contacts/saga';
import mailSagas from './mail/saga';
import notesSagas from './notes/saga';
import todosSagas from './todos/saga';
import chatSagas from './chat/sagas';
import cardsSagas from './card/saga';
import invoicesSagas from './invoice/saga';
import ecommerceSagas from './ecommerce/saga';
import githubSearchSagas from './githubSearch/sagas';
import youtubeSearchSagas from './youtubeSearch/sagas';
import instagramWidgetSagas from './instagramWidget/sagas';
import scrumBoardSagas from './scrumBoard/saga';
import customAppSagas from '../customApp/redux/sagas';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    contactSagas(),
    mailSagas(),
    notesSagas(),
    todosSagas(),
    chatSagas(),
    cardsSagas(),
    invoicesSagas(),
    ecommerceSagas(),
    youtubeSearchSagas(),
    githubSearchSagas(),
    instagramWidgetSagas(),
    customAppSagas(),
    scrumBoardSagas(),
  ]);
}
