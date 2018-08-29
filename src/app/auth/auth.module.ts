import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule} from '@angular/forms';
import {CoreModule} from '../core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    CoreModule
  ],
  declarations: [SigninComponent, SignupComponent]
})
export class AuthModule { }
