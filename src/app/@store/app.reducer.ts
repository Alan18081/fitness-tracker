import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUi from './ui/ui.reducer';
import * as fromAuth from './auth/auth.reducer';

export interface IAppState {
  ui: fromUi.State;
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<IAppState> = {
  ui: fromUi.uiReducer,
  auth: fromAuth.authReducer
};
