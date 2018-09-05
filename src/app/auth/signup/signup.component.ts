import { Component, OnDestroy, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
import { UiService } from '../../core/ui.service';
import { Subscription } from 'rxjs';

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
export class SignupComponent implements OnInit, OnDestroy {
  maxDate: Date;
  isLoading = false;
  loadingSub: Subscription;
  constructor(
    private authService: AuthService,
    private uiService: UiService
  ) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.loadingSub = this.uiService.authLoadingChanged.subscribe(isLoading => this.isLoading = isLoading);
  }

  submitHandler(form: NgForm) {
    const {email, password} = form.value;
    this.authService.signUp({
      email,
      password
    });
  }

  ngOnDestroy() {
    this.loadingSub.unsubscribe();
  }

}
