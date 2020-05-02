export class assignment
{
    number : number;
    title : String;
    performanceDate : Date;
}

export class Subject
{
    name : String;
    assignment : assignment[]
}

export class Labs 
{
    _id : String;    
    dept : String;
    year : number;
    subject : Subject[];      
}
