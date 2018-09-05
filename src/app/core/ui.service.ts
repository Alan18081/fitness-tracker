import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class UiService {
  authLoadingChanged = new Subject<boolean>();

  constructor(
    private snackbar: MatSnackBar
  ) {}

  showMessage(message: string, action: string, duration: number) {
    this.snackbar.open(message, action, {
      duration
    })
  }
}