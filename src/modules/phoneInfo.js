// src/modules/phonInfo.js
import { createAction, handleActions } from 'redux-actions';

// action types
const ADD = 'phoneInfoList/ADD';
const REMOVE = 'phoneInfoList/REMOVE';

// action constructors
export const add = createAction(ADD); // param : info
export const remove = createAction(REMOVE); // param : index

const initialState = {
  index: 0,
  phoneInfoList: [],
};

export default handleActions({

  [ADD]:  ( state, action ) => {
    const { index, phoneInfoList } = state;
    return {
      index: index + 1,
      phoneInfoList: phoneInfoList.concat({
        index: index,
        username: action.payload.username,
        phone: action.payload.phone,
      })
    };
  },

  [REMOVE]:  ( state, action ) => {
    const { phoneInfoList } = state;
    return {
      ...state,
      phoneInfoList: phoneInfoList.slice(0, action.payload)
    };
  },

}, initialState);