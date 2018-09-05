import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {IAppState} from '../@store/app.reducer';
import {Store} from '@ngrx/store';
import {getAuthStatus} from '../@store/auth/auth.selectors';
import {take} from 'rxjs/internal/operators';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private store: Store<IAppState>,
    private router: Router
  ) {}
  canActivate(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.select(getAuthStatus).pipe(take(1));
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.select(getAuthStatus).pipe(take(1));
  }
}
