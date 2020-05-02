import { Component, OnInit, Input } from '@angular/core';

import { Student, Assignment } from '../../store/schema/student'
import { Labs, assignment } from '../../store/schema/assignment'
import { Submission } from 'src/app/store/schema/student-submission-details';

@Component({
  selector: 'app-lab-record',
  templateUrl: './lab-record.component.html',
  styleUrls: ['./lab-record.component.scss']
})
export class LabRecordComponent implements OnInit {

  @Input() public student: Student;
  @Input() public labsList: Labs;
  @Input() public subject : String = "";

  public assignmentList: assignment[] = [];
  public submissionList: Submission[] = [];
  public submittedList: Assignment[] = [];

  public studentRecord : Submission[] = [];

  showAssignment: Boolean = false;
  submission: Submission;

  displayedColumns = ['No', 'Title', 'Performance Date', 'Status'];
  // displayedColumns = ['No', 'Title', 'Performance Date', 'Status', 'Submission Date',
                      // 'Link', 'Marks'];

  constructor() { }

  ngOnInit(): void 
  {
    this.studentRecord = [];
    this.showAssignment = true;

    // get assignment List of given subject from labs
    this.labsList.subject.forEach(sub => {
      if (sub.name == this.subject) {
        this.assignmentList = sub.assignment;
      }
    })

    // get list of assignment that student has submitted
      this.student.submission.forEach(submission => {
        if (submission.subject == this.subject) {
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
