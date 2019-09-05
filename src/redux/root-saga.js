import { all, call } from 'redux-saga/effects'
import { fetchCollStart } from './shop/shop.saga'
import { userSagas } from './user/user.saga';

export default function* rootSaga(){
    yield all([
        call(fetchCollStart),
        call(userSagas)
    ])
}