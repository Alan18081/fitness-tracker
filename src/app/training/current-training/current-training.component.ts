import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {StopTrainingComponent} from './stop-training.component';
import {Router} from '@angular/router';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  interval;
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private trainingService: TrainingService
  ) { }

  ngOnInit() {
    this.interval = setInterval(() => {
      if (this.progress === 100) {
        clearInterval(this.interval);
        return;
      }
      this.progress += 5;
    }, 1000);
  }

  stopTraining() {
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      }
    });
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        clearInterval(this.interval);
        this.router.navigate(['/past-training']);
      }
    });
  }
}
