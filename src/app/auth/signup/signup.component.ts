import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';
import {IAppState} from '../../@store/app.reducer';
import {Store} from '@ngrx/store';
import {getLoading} from '../../@store/ui/ui.selectors';
import * as authActions from '../../@store/auth/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
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
export class SignupComponent implements OnInit {
  maxDate: Date;
  isLoading: Observable<boolean>;
  constructor(
    private store: Store<IAppState>
  ) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.isLoading = this.store.select(getLoading);
  }

  submitHandler(form: NgForm) {
    const {email, password} = form.value;
    this.store.dispatch(new authActions.SignUp({ email, password }));
  }

}
