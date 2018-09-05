import * as actions from './ui.actions';

export interface State {
  loading: boolean;
}

const initialState: State = {
  loading: false
};

export function uiReducer(state = initialState, {type, payload}: actions.UIActions) {
  switch (type) {
    case actions.TOGGLE_LOADING:
      return {
        ...state,
        loading: payload
      };

    default:
      return state;
  }
}
