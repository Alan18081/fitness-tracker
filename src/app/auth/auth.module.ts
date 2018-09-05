import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from '../core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthRoutesModule } from './auth-routes.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    AuthRoutesModule
  ],
  declarations: [SigninComponent, SignupComponent]
})
export class AuthModule { }
