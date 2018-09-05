import { Action } from '@ngrx/store';

// export const GET_AUTH_STATUS = '[Auth] Get auth status';
export const LOGIN = '[Auth] Login';
export const AUTH_SUCCESS = '[Auth] Auth success';
export const LOGOUT = '[Auth] Logout';
export const LOGOUT_SUCCESS = '[Auth] Logout success';
export const SIGN_UP = '[Auth] Sign In';

// export class GetAuthStatus implements Action {
//   readonly type = GET_AUTH_STATUS;
// }

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: { email: string, password: string }) {}
}

export class AuthSuccess implements Action {
  readonly type = AUTH_SUCCESS;
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class LogoutSuccess implements Action {
  readonly type = LOGOUT_SUCCESS;
}

export class SignUp implements Action {
  readonly type = SIGN_UP;
  constructor(public payload: { email: string, password: string }) {}
}

export type AuthActions =
  AuthSuccess |
  Logout |
  SignUp |
  Login |
  LogoutSuccess;
