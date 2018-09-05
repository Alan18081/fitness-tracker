import {IUser} from './interfaces/user.interface';
import {IAuthData} from './interfaces/auth-data.interface';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {TrainingService} from '../training/training.service';
import { UiService } from '../core/ui.service';

@Injectable()
export class AuthService {
  private user: IUser;
  authChanged = new Subject<boolean>();

  constructor(
    private router: Router,
    private fireAuth: AngularFireAuth,
    private trainingService: TrainingService,
    private uiService: UiService,
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
    this.uiService.authLoadingChanged.next(true);
    this.fireAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.uiService.authLoadingChanged.next(false);
        this.user = {
          email,
          userId: String(Math.random() * 10000)
        };
        this.authSuccess();
      })
      .catch(({message}) => {
        this.uiService.authLoadingChanged.next(false);
        this.uiService.showMessage(message, null, 3000);
      });

  }

  signUp({email, password}: IAuthData) {
    this.uiService.authLoadingChanged.next(true);
    this.fireAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.uiService.authLoadingChanged.next(false);
        this.user = {
          email,
          userId: String(Math.random() * 10000)
        };
        this.authSuccess();
      })
      .catch(({message}) => {
        this.uiService.authLoadingChanged.next(false);
        this.uiService.showMessage(message, null, 3000);
      });

  }

  logout() {
    this.fireAuth.auth.signOut().then(() => {
      this.authChanged.next(false);
    })
      .catch(err => console.log(err));
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
