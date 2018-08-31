import {Component, OnInit} from '@angular/core';
import { TrainingService } from '../training.service';
import { IExercise } from '../interfaces/exercise.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  exercises: IExercise[] = [];

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exercises = this.trainingService.getAvailableExercises();
  }

  startTraining(form: NgForm) {
    this.trainingService.startTraining(form.value.training);
  }
}
