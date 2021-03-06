import { BrowserModule } from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app.routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { NavModule } from './nav/nav.module';
import { AuthService } from './auth/auth.service';
import {environment} from '../environments/environment';
import { AuthGuard } from './auth/auth-guard.service';
import { TrainingService } from './training/training.service';
import {StoreModule} from '@ngrx/store';
import { reducers } from './@store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    AuthModule,
    NavModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [AuthService, AuthGuard, TrainingService],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.initAuthListener();
  }
}
