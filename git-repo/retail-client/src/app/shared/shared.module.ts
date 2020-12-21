import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {SomethingWrongDialogComponent} from './dialogs/something-wrong-dialog/something-wrong-dialog.component';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatRippleModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    SomethingWrongDialogComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  exports: [
  ],
  entryComponents: [
    SomethingWrongDialogComponent
  ]
})
export class SharedModule {
}
