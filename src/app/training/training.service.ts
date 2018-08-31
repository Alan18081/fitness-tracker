import { IExercise } from './interfaces/exercise.interface';
import { Subject } from 'rxjs';

export class TrainingService {
  exerciseChanged = new Subject<IExercise>();
  private availableExercises: IExercise[] = [
    {id: 10, name: 'Crunches', duration: 30, calories: 8},
    {id: 11, name: 'Touch Toes', duration: 180, calories: 24},
    {id: 12, name: 'Side Lunges', duration: 120, calories: 16},
    {id: 13, name: 'Burpees', duration: 60, calories: 8}
  ];
  private runningExercise: IExercise;

  getAvailableExercises() {
    return this.availableExercises.slice();
  }

  startTraining(selectedId: number) {
    this.runningExercise = this.availableExercises.find(({id}) => id === selectedId);
    this.exerciseChanged.next({...this.runningExercise});
  }
}