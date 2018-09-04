import {IUser} from './interfaces/user.interface';
import {IAuthData} from './interfaces/auth-data.interface';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {TrainingService} from '../training/training.service';

@Injectable()
export class AuthService {
  private user: IUser;
  authChanged = new Subject<boolean>();

  constructor(
    private router: Router,
    private fireAuth: AngularFireAuth,
    private trainingService: TrainingService
  ) {}

  initAuthListener() {
    this.fireAuth.authState
      .subscribe(user => {
        if (user) {
          this.authSuccess();
        } else {
          this.authChanged.next(false);
          this.trainingService.cancelSubscriptions();
          this.router.navigate(['/signin']);
        }
      });
  }

  login({email, password}: IAuthData) {
    this.fireAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    this.user = {
      email,
      userId: String(Math.random() * 10000)
    };
    this.authSuccess();
  }

  signUp({email, password}: IAuthData) {
    this.fireAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        this.user = {
          email,
          userId: String(Math.random() * 10000)
        };
        this.authSuccess();
      })
      .catch(err => {
        console.log(err);
      });

  }

  logout() {
    this.fireAuth.auth.signOut();
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
