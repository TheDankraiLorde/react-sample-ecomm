import { combineReducers } from 'redux';
import userRed from './user/user.reducer';
import cartRed from './cart/cart.reducer';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userRed,
    cart: cartRed
})

export default persistReducer(persistConfig,rootReducer)