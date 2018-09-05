import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUi from './ui/ui.reducer';

export interface IAppState {
  ui: fromUi.State
}

export const reducers: ActionReducerMap<IAppState> = {
  ui: fromUi.uiReducer
};

export const getUiState = createFeatureSelector<fromUi.State>('ui');
export const getLoading = createSelector(getUiState, ({authLoading}) => authLoading);