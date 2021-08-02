import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import rootReducer from '../root.reducer';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}


export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export type RootState = ReturnType<typeof store.getState>
export type AppDisptach = typeof store.dispatch