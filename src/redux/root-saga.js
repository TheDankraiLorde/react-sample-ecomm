import { all, call } from 'redux-saga/effects'
import { fetchCollStart } from './shop/shop.saga'

export default function* rootSaga(){
    yield all([
        call(fetchCollStart)
    ])
}