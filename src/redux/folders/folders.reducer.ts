import { foldersActionTypes } from './folders.types';

const INITIAL_STATE = {
  openFolder: null,
};

const foldersReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case foldersActionTypes.SET_OPEN_FOLDER:
      return {
        ...state,
        openFolder: action.payload,
      };
    default:
      return state;
  }
};

export default foldersReducer;
