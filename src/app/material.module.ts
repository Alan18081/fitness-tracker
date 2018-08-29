import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatCardModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule, MatTabsModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ]
})
export class MaterialModule {

}
