import { Action } from '@ngrx/store';

export const TOGGLE_LOADING = '[UI] Toggle loading';

export class ToggleLoading implements Action {
  readonly type = TOGGLE_LOADING;
  constructor(public payload: boolean) {}
}

export type UIActions = ToggleLoading;