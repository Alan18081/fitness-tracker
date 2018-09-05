import {Component, OnDestroy, OnInit} from '@angular/core';
import { TrainingService } from '../training.service';
import { IExercise } from '../interfaces/exercise.interface';
import { NgForm } from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  exercises: IExercise[];
  exercisesSubscription: Subscription;

  constructor(
    private trainingService: TrainingService
  ) { }

  ngOnInit() {
    this.exercisesSubscription = this.trainingService
      .exercisesChanged
      .subscribe((exercises: IExercise[]) => {
        this.exercises = exercises;
      });
  }

  ngOnDestroy() {
    this.exercisesSubscription.unsubscribe();
  }

  startTraining(form: NgForm) {
    this.trainingService.startTraining(form.value.training);
  }
}
