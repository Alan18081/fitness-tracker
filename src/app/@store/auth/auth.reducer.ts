import * as fromAuth from './auth.actions';

export interface State {
  isAuth: boolean;
};

const initialState: State = {
  isAuth: false
};

export function authReducer(state = initialState, {type}: fromAuth.AuthActions) {
  switch (type) {

    case fromAuth.LOGOUT_SUCCESS:
      return {
        isAuth: false
      };

    case fromAuth.LOGIN:
      return {
        isAuth: true
      };

    default:
      return state;
  }
}
