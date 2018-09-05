import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State} from './ui.reducer';

export const getUiState = createFeatureSelector<State>('ui');
export const getLoading = createSelector(getUiState, ({loading}) => loading);
