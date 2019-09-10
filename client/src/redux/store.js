import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import rootRed from './root-reducer'
import rootSaga from './root-saga'

const sagaMidWare = createSagaMiddleware();

const middlewares = [sagaMidWare];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}
export const store = createStore(
    rootRed, 
    applyMiddleware(...middlewares)
)

sagaMidWare.run(rootSaga);
export const persistor = persistStore(store)
export default {store,persistor}
