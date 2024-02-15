import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer'; 
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';

const middlewares = [thunk];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares)
});

export default store;