/* eslint-disable no-param-reassign */

import { createImmerReducer } from 'ngrx-immer/store';
import { GlobalState } from './global.models';
import { initialGlobalState } from './global.state';

export const gloablReducer =
  createImmerReducer<GlobalState>(initialGlobalState);
