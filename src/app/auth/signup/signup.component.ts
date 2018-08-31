import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';

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
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  submitHandler(form: NgForm) {
    const {email, password} = form.value;
    this.authService.signUp({
      email,
      password
    });
  }

}
