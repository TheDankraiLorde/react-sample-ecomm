import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'

import rootRed from './root-reducer'

const middlewares = [logger];
const store = createStore(rootRed, applyMiddleware(...middlewares))

export default store
