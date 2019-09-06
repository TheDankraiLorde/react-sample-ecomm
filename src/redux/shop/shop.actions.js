import ShopActionTypes from "./shop.types";

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
