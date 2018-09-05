import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { nav, authNav, INavItem } from '../nav';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

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

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isAuth = this.authService.isAuth();
    this.navLinks = this.isAuth ? authNav : nav;
    this.authSubscription = this.authService.authChanged.subscribe((isAuth: boolean) => {
      this.isAuth = isAuth;
      this.navLinks = this.isAuth ? authNav : nav;
    });
  }

  toggleMenu() {
    this.sidenavToggled.emit();
  }

  logoutHandler() {
    this.authService.logout();
  }

  ngOnDestroy() {
    if(this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

}
