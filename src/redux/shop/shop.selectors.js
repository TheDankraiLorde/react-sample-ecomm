import {createSelector} from 'reselect'

const selectShop = state => state.shop;

export const selectCollectionHeaders = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollForPreview = createSelector(
    [selectCollectionHeaders],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = (collectionUrlParam) => createSelector(
    [selectCollectionHeaders],
    collections => collections[collectionUrlParam]
)
