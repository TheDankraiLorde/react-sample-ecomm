import { combineReducers } from 'redux';
import userRed from './user/user.reducer';
import cartRed from './cart/cart.reducer';
import directoryRed from './directory/directory.reducer'
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart','directory']
}

const rootReducer = combineReducers({
    user: userRed,
    cart: cartRed,
    directory: directoryRed
})

export default persistReducer(persistConfig,rootReducer)