import {IUser} from './interfaces/user.interface';
import {IAuthData} from './interfaces/auth-data.interface';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {TrainingService} from '../training/training.service';
import { UiService } from '../core/ui.service';
import {IAppState} from '../@store/app.reducer';
import {Store} from '@ngrx/store';
import * as authActions from '../@store/auth/auth.actions';

@Injectable()
export class AuthService {
  constructor(
    private router: Router,
    private fireAuth: AngularFireAuth,
    private trainingService: TrainingService,
    private store: Store<IAppState>
  ) {}

  initAuthListener() {
    this.fireAuth.authState
      .subscribe(user => {
        if (user) {
          this.store.dispatch(new authActions.AuthSuccess());
        } else {
          this.trainingService.cancelSubscriptions();
          this.router.navigate(['/signin']);
        }
      });
  }

}
