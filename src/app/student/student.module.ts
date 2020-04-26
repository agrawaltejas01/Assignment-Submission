import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectAssignmentComponent } from './select-assignment/select-assignment.component';



@NgModule({
  declarations: [SelectAssignmentComponent],
  imports: [
    CommonModule,
  ],

  exports : [
    SelectAssignmentComponent
  ]
})
export class StudentModule { }
