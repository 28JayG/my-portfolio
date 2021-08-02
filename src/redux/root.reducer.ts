import { combineReducers } from 'redux';
import foldersReducer from './folders/folders.reducer';

const rootReducer = combineReducers({
  folder: foldersReducer,
});

export default rootReducer;
