import { STORE_DATA } from '../types';
import { handleActions } from 'redux-actions';

export const myReducer = handleActions({
  [STORE_DATA]: function(state: any, action: any) {
    return {
      ...state,
      ...action.payload
    }
  }
}, {
});