import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app.routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { TrainingModule } from './training/training.module';
import { NavModule } from './nav/nav.module';
import { AuthService } from './auth/auth.service';

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
    TrainingModule,
    NavModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
