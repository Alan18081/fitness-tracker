import {AfterContentInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {IExercise} from '../interfaces/exercise.interface';
import {TrainingService} from '../training.service';
import {Subscription} from 'rxjs/index';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css']
})
export class PastTrainingsComponent implements OnInit, AfterContentInit, OnDestroy {
  columns = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<IExercise>();
  exercFinishedSubscription: Subscription;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private trainingService: TrainingService) {
    this.dataSource.data = this.trainingService.getAvailableExercises();
  }

  ngOnInit() {
    this.exercFinishedSubscription = this.trainingService.finishedExercisesChanged
      .subscribe((exercises: IExercise[]) => {
        this.dataSource.data = exercises;
      });

    this.trainingService.fetchFinishedExercises();
  }

  ngAfterContentInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  filterHandler(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.exercFinishedSubscription.unsubscribe();
  }

}
