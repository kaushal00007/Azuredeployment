import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SuccessDialogModel } from '../../../models/dialog.models';

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: [ './success-dialog.component.scss' ]
})
export class SuccessDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SuccessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SuccessDialogModel) {
  }

  ngOnInit() {
    setTimeout(() => this.dialogRef.close(), this.data.timeToClose);
  }

}
