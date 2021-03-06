import { Component, OnInit } from '@angular/core';
import { MongoConnectService } from 'src/app/store/services/mongo-connect.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Student, Assignment } from '../../store/schema/student'
import { Labs, assignment } from '../../store/schema/assignment'
import { Submission } from 'src/app/store/schema/student-submission-details';
import { element } from 'protractor';

@Component({
  selector: 'app-select-assignment',
  templateUrl: './select-assignment.component.html',
  styleUrls: ['./select-assignment.component.scss']
})
export class SelectAssignmentComponent implements OnInit {

  public studentId: String = "I2K16102102";
  public student: Student;
  public labsList: Labs;
  public subjectList: String[] = [];

  constructor(private mongoService: MongoConnectService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.getStudentInfo();
  }

  getStudentInfo() {
    this.mongoService.getStudent(this.studentId)
      .subscribe(data => {

        this.student = data;
        this.getAssignmentList(this.student?.dept[0], this.student?.year);
      })
  }

  getAssignmentList(dept, year) {
    this.mongoService.getAssignmentList(this.student?.dept[0], this.student?.year)
      .subscribe(data => {
        this.labsList = data;
        this.subjectList = this.getSubjectList(this.labsList);
      })
  }

  getSubjectList(assignment: Labs) {
    var subjectList: String[] = [];
    var map = {};

    assignment.subject.forEach(element => {
      subjectList.push(element.name);
    });

    return subjectList;
  }

}
