import { NgModule } from '@angular/core';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { TrainingComponent } from './training.component';
import {FormsModule} from '@angular/forms';
import {StopTrainingComponent} from './current-training/stop-training.component';
import { TrainingRoutesModule } from './training-routes.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule,
    TrainingRoutesModule
  ],
  declarations: [
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    TrainingComponent,
    StopTrainingComponent
  ],
  exports: [
    TrainingComponent
  ],
  entryComponents: [
    StopTrainingComponent
  ]
})
export class TrainingModule { }
