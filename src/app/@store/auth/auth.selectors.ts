import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State} from './auth.reducer';

export const getAuthState = createFeatureSelector<State>('auth');
export const getAuthStatus = createSelector(getAuthState, ({isAuth}) => isAuth);
