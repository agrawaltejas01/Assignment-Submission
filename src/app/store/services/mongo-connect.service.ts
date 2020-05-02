import { Injectable } from '@angular/core';
import {  HttpClientModule, HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Student } from '../schema/student';
import { Labs } from '../schema/assignment';
 
@Injectable({
  providedIn: 'root'
})
export class MongoConnectService {

   baseUrl ;

  constructor(private http : HttpClient) { 
    this.baseUrl = 'http://localhost:8080/'
   }  

  FindStudentInBatch(batch)
  {            
    return this.http.post<Student[]>(this.baseUrl + 'api/FindStudentInBatch', {
      batch
    })
    // }).pipe(
    //     map((response) => {
    //       console.log("In Service :");
    //       console.log(response);
    //       return response;
    //     })
    // )
  }

  getStudent(id : String)
  {
    return this.http.post<Student>(this.baseUrl + 'api/getStudent', {
      id
    })
  }

  getAssignmentList(dept : String, year : Number)
  {
    return this.http.post<Labs>(this.baseUrl + 'api/getAssignmentList', {
      dept,
      year
    })
  }

}
