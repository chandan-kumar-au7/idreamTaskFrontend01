import { all, takeEvery, put, call } from 'redux-saga/effects';
import actions from './actions';
import { instagramConfig } from '../../settings';

const {instagramUserInfoApiUrl, instagramUserMediaApiUrl, accessToken} = instagramConfig;

const getUserInfo = async () =>
	await fetch(`${instagramUserInfoApiUrl}${accessToken}`)
    .then(res => res.json())
    .then(res => res)
    .catch(error => error);	

const getUserMedia= async () =>
	await fetch(`${instagramUserMediaApiUrl}${accessToken}`)
    .then(res => res.json())
    .then(res => res)
    .catch(error => error);	    

function* getUserData() {
	const userInfo = yield call(getUserInfo);
	const userMedia = yield call(getUserMedia);
	const userData = {
		info: userInfo.data,
		media: userMedia.data
	};
  yield put(
    actions.setUserData(userData)
  );	
}

export default function* rootSaga() {
  yield all(
  	[takeEvery(actions.GET_USER_DATA, getUserData)],
  );
}
