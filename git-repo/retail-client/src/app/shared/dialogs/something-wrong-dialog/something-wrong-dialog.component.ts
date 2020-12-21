import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SomethingWrongDialogModel} from '../../../models/dialog.models';

@Component({
  selector: 'app-something-wrong-dialog',
  templateUrl: './something-wrong-dialog.component.html',
  styleUrls: ['./something-wrong-dialog.component.scss']
})
export class SomethingWrongDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SomethingWrongDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: SomethingWrongDialogModel) {
  }

  ngOnInit() {
    setTimeout(() => this.dialogRef.close(), this.data.timeToClose);
  }

}
