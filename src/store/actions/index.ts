import { STORE_DATA } from '../types'

import { createAction } from 'redux-actions';

export const domainDataActionCreator = createAction(STORE_DATA, (data: any) => {
  return data;
});