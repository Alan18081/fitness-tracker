import { NgModule } from '@angular/core';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { TrainingComponent } from './training.component';
import {CoreModule} from '../core/core.module';
import {FormsModule} from '@angular/forms';
import {StopTrainingComponent} from './current-training/stop-training.component';

@NgModule({
  imports: [
    FormsModule,
    CoreModule
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
