import {IUser} from './interfaces/user.interface';
import {IAuthData} from './interfaces/auth-data.interface';

export class AuthService {
  private user: IUser;

  login(authData: IAuthData) {
    this.user = {
      email: authData.email,
      userId: Math.random() * 10000
    }
  }

  signUp(authData: IAuthData) {
    this.user = {
      email: authData.email,
      userId: Math.random() * 10000
    }
  }

  logout() {
    this.user = null;
  }

  getUser() {
    return {...this.user};
  }

}