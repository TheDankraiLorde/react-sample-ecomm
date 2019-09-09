import { takeLatest , call, put,all} from 'redux-saga/effects'
import ShopActionTypes from './shop.types'
import {firestore,convSnapToMap} from '../../firebase/firebase.utils'
import { fetchCollPass, fetchCollFail } from './shop.actions';

export function* fetchCollAsync(){
    try
    {
        const CollRef = firestore.collection('collections')
        const snapshot = yield CollRef.get()
        const collMap = yield call(
            convSnapToMap,
            snapshot
        )
        yield put(fetchCollPass(collMap))
    }
    catch(err){
        yield put(fetchCollFail(err))
    }

    //    CollRef.get().then(snapshot => {
    //        const collObj = convSnapToMap(snapshot)
    //        dispatch(fetchCollPass(collObj))
    //        this.setState({loading:false})
    //    }).catch(err => dispatch(fetchCollFail(err.message)))

}

export function* fetchCollStart(){
    yield takeLatest(
        ShopActionTypes.FETCH_COLL_START,
        fetchCollAsync
    )
}

export function* shopSagas(){
    yield all([call(fetchCollStart)])
}