import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'

import rootRed from './root-reducer'

const middlewares = [logger];
export const store = createStore(rootRed, applyMiddleware(...middlewares))

export const persistor = persistStore(store)
export default {store,persistor}
