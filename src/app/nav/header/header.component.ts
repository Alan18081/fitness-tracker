import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { nav } from '../nav';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggled = new EventEmitter<void>();
  navLinks = nav;
  isAuth: boolean;
  authSubscription: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isAuth = this.authService.isAuth();
    this.authSubscription = this.authService.authChanged.subscribe((isAuth: boolean) => {
      this.isAuth = isAuth;
    });
  }

  toggleMenu() {
    this.sidenavToggled.emit();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
