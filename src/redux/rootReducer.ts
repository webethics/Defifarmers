import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// slices

import productReducer from './slices/product';

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const productPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['sortBy', 'products', 'myCollection', 'accountAddress'],
};

const rootReducer = combineReducers({
  product: persistReducer(productPersistConfig, productReducer),
});

export { rootPersistConfig, rootReducer };
