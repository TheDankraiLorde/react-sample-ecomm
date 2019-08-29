import ShopActionTypes from "./shop.types";

export const updateCollections = (collMap) => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collMap
})