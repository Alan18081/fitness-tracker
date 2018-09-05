import {Effect, Actions, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import * as fromAuth from './auth.actions';
import {of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {AngularFireAuth} from 'angularfire2/auth';
import {UiService} from '../../core/ui.service';
import {catchError} from 'rxjs/internal/operators';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private fireAuth: AngularFireAuth,
    private uiService: UiService
  ) {}

  @Effect()
  login$ = this.actions$
    .pipe(
      ofType(fromAuth.LOGIN),
      map((action: fromAuth.Login) => {
        return action.payload;
      }),
      switchMap(({email, password}) => {
        return of(
          this.fireAuth.auth.signInWithEmailAndPassword(email, password),
          catchError(({message}) => {
            this.uiService.showMessage(message, null, 4000);
            return of({});
          })
        );
      }),
      map(() => new fromAuth.AuthSuccess())
    );

  @Effect()
  logout = this.actions$
    .pipe(
      ofType(fromAuth.LOGOUT),
      switchMap(() => {
        return of(
          this.fireAuth.auth.signOut(),
          catchError(({message}) => {
            this.uiService.showMessage(message, null, 4000);
            return of({});
          })
        );
      }),
      map(() => new fromAuth.LogoutSuccess())
    );

  @Effect()
  signUp$ = this.actions$
    .pipe(
      ofType(fromAuth.SIGN_UP),
      map((action: fromAuth.SignUp) => {
        return action.payload;
      }),
      switchMap(({email, password}) => {
        return of(
          this.fireAuth.auth
            .createUserAndRetrieveDataWithEmailAndPassword(email, password),
          catchError(({message}) => {
            this.uiService.showMessage(message, null, 4000);
            return of({});
          })
        );
      }),
      map(() => new fromAuth.AuthSuccess())
    );
}
