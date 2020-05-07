import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectAssignmentComponent } from './select-assignment/select-assignment.component';
import { MongoConnectService } from '../store/services/mongo-connect.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LabRecordComponent } from './lab-record/lab-record.component';


@NgModule({
  declarations: [SelectAssignmentComponent, LabRecordComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule,
    MatInputModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatIconModule,
    FormsModule,   
  ],

  exports : [
    SelectAssignmentComponent,
    LabRecordComponent
  ],

  providers:[
    MongoConnectService,
  ]
  
})
export class StudentModule { }
