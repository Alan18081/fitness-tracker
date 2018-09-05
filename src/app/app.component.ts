import {Component, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {IAppState} from './@store/app.reducer';
import {Store} from '@ngrx/store';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.authService.initAuthListener();
  }
}
