
export class Assignment
{
    number : number;
    submissionDate : Date;
    link : String;
    marks : number;
}

export class Submission
{
    subject : String;        
    assignment : Assignment[];
}


export class Student 
{
    _id : String;
    roll : number;
    name : String;
    dept : String;
    year : number;
    class : String;
    batch : String;
    submission : Submission[];
}
