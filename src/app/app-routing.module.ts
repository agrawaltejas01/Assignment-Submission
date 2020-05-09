import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectAssignmentComponent } from './student/select-assignment/select-assignment.component';

import { SelectStudentComponent } from './teacher/select-student/select-student.component';

const baseUrl = 'http://localhost:4200/'

const routes: Routes = [

  // will be changed after  
  {
    path: 'student'
    , component: SelectAssignmentComponent
  },

  {
    path: 'teacher',
    component: SelectStudentComponent
  },

  {
    path: "**",
    component: SelectStudentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
