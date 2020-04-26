import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectAssignmentComponent } from './student/select-assignment/select-assignment.component';


const routes: Routes = [

  // will be changed after
  {path : "**", component : SelectAssignmentComponent},
  
  {path : 'student', component : SelectAssignmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
