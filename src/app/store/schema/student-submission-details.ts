export class Submission
{
    srNo : Number = -1;
    title : String = "";
    performanceDate : Date = null;
    submissionDate : Date = null;
    link : String = "";
    marks : Number = 0;
    status : Boolean = false;
    
    Submission()
    {
        this.srNo = -1;
        this.title = "";
        this.performanceDate = null;
        this.submissionDate = null;
        this.link = "";
        this.marks = 0;
        this.status = false;
    }

}