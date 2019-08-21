import {createSelector} from 'reselect'

const selectShop = state => state.shop;

export const selectCollectionHeaders = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = (collectionUrlParam) => createSelector(
    [selectCollectionHeaders],
    collections => collections[collectionUrlParam]
)
