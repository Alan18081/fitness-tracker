import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CoreModule,
    RouterModule
  ],
  exports: [
    SidenavMenuComponent,
    HeaderComponent
  ],
  declarations: [
    SidenavMenuComponent,
    HeaderComponent
  ]
})
export class NavModule { }
