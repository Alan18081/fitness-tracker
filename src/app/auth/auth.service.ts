import {IUser} from './interfaces/user.interface';
import {IAuthData} from './interfaces/auth-data.interface';
import {Subject} from 'rxjs/index';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  private user: IUser;
  authChanged = new Subject<boolean>();

  constructor(
    private router: Router
  ) {}

  login(authData: IAuthData) {
    this.user = {
      email: authData.email,
      userId: String(Math.random() * 10000)
    };
    this.authSuccess();
  }

  signUp(authData: IAuthData) {
    this.user = {
      email: authData.email,
      userId: String(Math.random() * 10000)
    };
    this.authSuccess();
  }

  logout() {
    this.user = null;
    this.authChanged.next(false);
    this.router.navigate(['/signin']);
  }

  getUser() {
    return {...this.user};
  }

  isAuth() {
    return this.user !== null;
  }

  authSuccess() {
    this.router.navigate(['/training']);
    this.authChanged.next(true);
  }
}
