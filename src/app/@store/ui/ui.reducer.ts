import * as actions from './ui.actions';

export interface State {
  authLoading: boolean;
}

const initialState: State = {
  authLoading: false
};

export function uiReducer(state = initialState, {type, payload}: actions.UIActions) {
  switch (type) {
    default:
      return state;
  }
}