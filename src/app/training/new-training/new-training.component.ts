import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  @Output() trainingStarted = new EventEmitter<void>();
  trainingTypes = [
    {
      value: 'crunches',
      caption: 'Crunches'
    },
    {
      value: 'touch-toes',
      caption: 'Touch toes'
    },
    {
      value: 'burpees',
      caption: 'Burpees'
    },
  ];
  selectedTraining: string;
  constructor() { }

  ngOnInit() {
  }

  startTraining() {
    this.trainingStarted.emit();
  }
}
