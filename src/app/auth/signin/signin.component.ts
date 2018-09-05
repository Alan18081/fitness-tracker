import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Observable} from 'rxjs';
import { UiService } from '../../core/ui.service';
import {IAppState} from '../../@store/app.reducer';
import {Store} from '@ngrx/store';
import * as uiSelectors from '../../@store/ui/ui.selectors';
import * as authActions from '../../@store/auth/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  animations: [
    trigger('show-card', [
      state('shown', style({
        transform: 'transitionY(0)',
        opacity: 1
      })),
      transition('void <=> *', [
        style({
          transform: 'translateY(300px)',
          opacity: 0
        }),
        animate(400)
      ])
    ])
  ]
})
export class SigninComponent implements OnInit {
  form = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
  });
  isLoading: Observable<boolean>;
  constructor(
    private store: Store<IAppState>
  ) { }

  ngOnInit() {
    this.isLoading = this.store.select(uiSelectors.getLoading);
  }

  submitHandler() {
    const {email, password} = this.form.value;
    this.store.dispatch(new authActions.Login({ email, password }));
  }
}
