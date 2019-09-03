import {createSelector} from 'reselect'

const selectShop = state => state.shop;

export const selectCollectionHeaders = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollForPreview = createSelector(
    [selectCollectionHeaders],
    (collections) => (
        (collections) ? (Object.keys(collections).map(key => collections[key])):[]
    )
)

export const selectCollection = (collectionUrlParam) => createSelector(
    [selectCollectionHeaders],
    collections => (collections ? collections[collectionUrlParam] : null)
)

export const selectIsCollFetch = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selCollLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)