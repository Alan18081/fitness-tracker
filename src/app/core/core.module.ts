import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class CoreModule {}