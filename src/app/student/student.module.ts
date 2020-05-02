import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectAssignmentComponent } from './select-assignment/select-assignment.component';
import { MongoConnectService } from '../store/services/mongo-connect.service';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [SelectAssignmentComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],

  exports : [
    SelectAssignmentComponent
  ],

  providers:[
    MongoConnectService,
  ]
  
})
export class StudentModule { }
