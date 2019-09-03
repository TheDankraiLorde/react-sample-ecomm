import ShopActionTypes from "./shop.types";
import {firestore,convSnapToMap} from '../../firebase/firebase.utils'

export const fetchCollStart = () => ({
    type: ShopActionTypes.FETCH_COLL_START,
})

export const fetchCollPass = collMap => ({
    type: ShopActionTypes.FETCH_COLL_PASS,
    payload: collMap
})

export const fetchCollFail = err => ({
    type: ShopActionTypes.FETCH_COLL_FAIL,
    payload: err
})

export const fetchCollStartAsync = () => {
    return dispatch => {
        const CollRef = firestore.collection('collections')
        dispatch(fetchCollStart());
        CollRef.get().then(snapshot => {
            const collObj = convSnapToMap(snapshot)
            dispatch(fetchCollPass(collObj))
            this.setState({loading:false})
        }).catch(err => dispatch(fetchCollFail(err.message)))
    }   
}