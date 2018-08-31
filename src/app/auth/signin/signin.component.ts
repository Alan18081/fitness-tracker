import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

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
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  submitHandler() {
    const {email, password} = this.form.value;
    this.authService.login({
      email,
      password
    });
  }

}
