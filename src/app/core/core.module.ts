import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { UiService } from './ui.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  exports: [
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [UiService]
})
export class CoreModule {}