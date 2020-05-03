import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import {
  ACTION_TYPES,
  setActionType,
} from './action';

function reducer(state, action) {
  const {
    ACTION_TYPE,
  } = ACTION_TYPES;

  switch (action.type) {
    case ACTION_TYPE: {
      return {
        ...state,
        param: action.payload,
      };
    }

    default:
      return state;
  }
}

export const store = createStore(
  reducer,
  {
    param: null,
  },
  devToolsEnhancer(
    setActionType(),
  )
);
