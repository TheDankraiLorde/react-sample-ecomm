
import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errMsg: undefined
}

const shopRed = (state = INITIAL_STATE, action) => {
    switch(action.type){

        case ShopActionTypes.FETCH_COLL_START:
            return {
                ...state,
                isFetching: true
            }

        case ShopActionTypes.FETCH_COLL_PASS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }

        case ShopActionTypes.FETCH_COLL_FAIL:
            return {
                ...state,
                isFetching: false,
                errMsg: action.payload
            }

        default:
            return state;
    }
}

export default shopRed