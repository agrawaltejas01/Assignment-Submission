import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

import { SelectStudentComponent } from './select-student/select-student.component';



@NgModule({
  declarations: 
  [
    SelectStudentComponent
  ],

  imports: 
  [
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

  exports :
  [
    SelectStudentComponent,
  ],

  providers:
  [
    MongoConnectService,
  ]
})
export class TeacherModule { }
