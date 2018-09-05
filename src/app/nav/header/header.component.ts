import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { nav, authNav, INavItem } from '../nav';
import {Subscription} from 'rxjs';
import {IAppState} from '../../@store/app.reducer';
import {Store} from '@ngrx/store';
import {getAuthStatus} from '../../@store/auth/auth.selectors';
import * as authActions from '../../@store/auth/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggled = new EventEmitter<void>();
  navLinks: INavItem[];
  isAuth: boolean;
  authSubscription: Subscription;

  constructor(
    private store: Store<IAppState>
  ) {}

  ngOnInit() {
    this.authSubscription = this.store.select(getAuthStatus)
      .subscribe(isAuth => {
        this.isAuth = isAuth;
        this.navLinks = isAuth ? authNav : nav;
      });
  }

  toggleMenu() {
    this.sidenavToggled.emit();
  }

  logoutHandler() {
    this.store.dispatch(new authActions.Logout());
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

}
