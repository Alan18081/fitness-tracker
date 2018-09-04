import { IExercise } from './interfaces/exercise.interface';
import {of, Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {catchError, map} from 'rxjs/internal/operators';
import {from, Subscription} from 'rxjs';

@Injectable()
export class TrainingService {
  exerciseChanged = new Subject<IExercise>();
  exercisesChanged = new Subject<IExercise[]>();
  finishedExercisesChanged = new Subject<IExercise[]>();
  private availableExercises: IExercise[] = [];
  private runningExercise: IExercise;
  private finishedExercises: IExercise[];
  private fbSubscriptions: Subscription[];

  constructor(
    private firestore: AngularFirestore
  ) {}

  fetchAvailableExercises() {
    this.fbSubscriptions.push(
      this.firestore
        .collection('availableExercises')
        .snapshotChanges()
        .pipe(map((docArray) => {
          return docArray.map((doc: any) => {
            return {
              id: doc.payload.doc.id,
              name: doc.payload.doc.data().name,
              duration: doc.payload.doc.data().duration,
              calories: doc.payload.doc.data().calories
            };
          });
        }))
        .subscribe((exercises: IExercise[]) => {
          console.log(exercises);
          this.availableExercises = exercises;
          this.exercisesChanged.next([...this.availableExercises]);
        })
    );
  }

  getAvailableExercises() {
    return this.availableExercises.slice();
  }

  cancelSubscriptions() {
    this.fbSubscriptions.forEach(subs => subs.unsubscribe());
  }

  startTraining(selectedId: number) {
    this.firestore.doc(`/availableExercises/`, selectedId).update({
      lastVisited: new Date()
    });
    this.runningExercise = this.availableExercises.find(({id}) => id === selectedId);
    this.addDataToDatabase(this.runningExercise);
    this.exerciseChanged.next({...this.runningExercise});
  }

  addDataToDatabase(exercise: IExercise) {
    return from(
      this.firestore
        .collection('finishedExercises')
        .add(exercise)
    )
      .pipe(
        map(() => {
          this.fetchFinishedExercises();
        }),
        catchError((error: Error) => {
          console.log(error);
          return of(error);
        })
      );
  }

  fetchFinishedExercises() {
    this.firestore.collection('finishedExercises')
      .valueChanges()
      .subscribe((exercises: IExercise[]) => {
        this.finishedExercisesChanged.next([...exercises]);
      });
  }
}
