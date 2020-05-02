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
  public assignmentList: assignment[] = [];
  public submissionList: Submission[] = [];
  public submittedList: Assignment[] = [];

  public studentRecord : Submission[] = [];

  showAssignment: Boolean = false;
  submission: Submission;

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

  getLabDetails(selectedSubject) {
    this.studentRecord = [];
    this.showAssignment = true;

    // get assignment List of given subject from labs
    this.labsList.subject.forEach(sub => {
      if (sub.name == selectedSubject) {
        this.assignmentList = sub.assignment;
      }
    })

    // get list of assignment that student has submitted
      this.student.submission.forEach(submission => {
        if (submission.subject == selectedSubject) {
          this.submittedList = submission.assignment;
        }
      })
    
    // merge both lists
      let map = {};
      this.assignmentList.forEach(element => {
        element.number = element.number - 1;
        this.studentRecord[element.number] = new Submission();
        

        this.studentRecord[element.number].srNo = element.number;
        this.studentRecord[element.number].performanceDate = element.performanceDate;
        this.studentRecord[element.number].title = element.title;
        this.studentRecord[element.number].link = "";
        this.studentRecord[element.number].marks = 0;
        this.studentRecord[element.number].submissionDate = null;
        this.studentRecord[element.number].status = false;
        
      });

      this.submittedList.forEach(element =>{
        element.number = element.number - 1;                  

          this.studentRecord[element.number].link = element.link;
          this.studentRecord[element.number].submissionDate = element.submissionDate;
          this.studentRecord[element.number].status = true;
          this.studentRecord[element.number].marks = element.marks        
      })
          
      console.log(this.studentRecord);

  }

}
